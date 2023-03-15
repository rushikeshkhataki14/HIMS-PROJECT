import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';
import swal from 'sweetalert2';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit {

  formdata: any;
  result: any;
  id = 0;

  constructor(private api: ApiService) {

  }

  ngOnInit(): void {


    this.load();

  }

  load() {
    this.id = 0;
    this.api.get("titles").subscribe((result: any) => {
      this.result = result.data;
    });
    this.formdata = new FormGroup({
      name: new FormControl("", Validators.compose([Validators.required]))
    });
  }

  edit(id: any) {
    this.id = id;
    this.api.get("titles/" + id).subscribe((result: any) => {
      this.formdata = new FormGroup({
        name: new FormControl(result.data.name, Validators.compose([Validators.required]))
      })

    })
  }

  delete(id: any) {

    Swal.fire({
      title: 'Are you sure you want to Delete?',
      text: '',
      // width: '400px',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete It!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        //Delete Api

        this.api.delete("titles/" + id).subscribe((result: any) => {

          swal.fire('Deleted', '', 'success')
          this.load();
        });
        Swal.fire(

          'Deleted Succesfully...!',
        )
      }
      else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Thank You',
          'error'
        )
      }
    })

  }

  submit(data: any) {

    if (this.id == 0) {
      this.api.post("titles", data).subscribe((result: any) => {
        swal.fire("Save Successfully", '', 'success')
        this.load();
      })
    }


    else {
      this.api.put("titles/" + this.id, data).subscribe((result: any) => {
        this.load();
        Swal.fire('Updated Succesfully!', '', 'success')
      })


    }
  }

}




