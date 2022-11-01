import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Dev } from '../../interfaces/dev.models';

@Component({
  selector: 'app-dev-list',
  templateUrl: './dev-list.component.html',
  styleUrls: ['./dev-list.component.scss']
})
export class DevListComponent implements OnInit {
  arrayDevs:Dev[]=[];

  constructor( private dataService:DataService ){ }

  ngOnInit(): void {
    this.dataService.getDevs().subscribe(
      resp => this.arrayDevs = resp
    );
  }

}
