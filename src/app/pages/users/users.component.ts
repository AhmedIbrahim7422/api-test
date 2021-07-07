import { IUsers } from './../../shared/interface/userdatas';
import { DataService } from './../../shared/services/data.service';
import { Component, DoCheck, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, DoCheck {
  p = '';
  constructor(public d: DataService ) { }
  dat = this.d.dat;
  data: Array<IUsers>;
  ngOnInit(): void {
    this.getData();
}
  ngDoCheck(): void{
  }
  getData(){
    this.d.getData().subscribe(
        (res: Array<IUsers>) => {
          this.data = res;
        }
      );
    }


}
