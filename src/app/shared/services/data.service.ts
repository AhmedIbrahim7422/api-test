import { IUsers } from './../interface/userdatas';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, DoCheck } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    this.dat = localStorage.getItem('dat') ? JSON.parse(localStorage.getItem('dat')) : [];
   }
  data: Array<IUsers>;
   dat: Array<IUsers> = [];



   // tslint:disable-next-line: typedef
   addForm(dat: IUsers){
     this.dat.push(dat);
     this.updata();
  }

  updata(){
         localStorage.setItem('dat', JSON.stringify(this.dat));
  }

  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  postData(userData){
    return this.http.post('https://reqres.in/api/users', userData);
  }
  getPost(){
    return this.http.get('https://reqres.in/api/users');
  }

}
