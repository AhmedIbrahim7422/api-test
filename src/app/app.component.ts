import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'football';

  constructor(private d: DataService){}
  ngOnInit(): void {

  }
  // tslint:disable-next-line: typedef

}
