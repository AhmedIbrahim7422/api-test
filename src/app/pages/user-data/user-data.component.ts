import { HttpClient } from '@angular/common/http';
import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  addForm: FormGroup;
  // tslint:disable-next-line: no-shadowed-variable
  constructor(public d: DataService, private http: HttpClient, private FormBuilder: FormBuilder) {
    this.addForm = FormBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['',  [Validators.required, Validators.minLength(11) ]],
      street: ['', Validators.required],
      city: ['', Validators.required],
      suite: ['', Validators.required],
      website: ['', Validators.required],

   });
   }


  ngOnInit(): void {

  }
  updata(){
    localStorage.setItem('dat', JSON.stringify(this.d.dat));
}

  postData(){
    this.d.postData(this.addForm.value).subscribe(
      () => {
         this.d.dat.push(this.addForm.value);
         this.updata();
      }
    );

  }
}
