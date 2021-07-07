import { IUsers } from './../../shared/interface/userdatas';
import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
 p = '';
 dat = this.d.dat;
  constructor(private d: DataService) { }
  data: Array<IUsers>;
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.d.getData().subscribe(
        (res: Array<IUsers>) => {
          this.data = res;
        }
      );
    }

}
