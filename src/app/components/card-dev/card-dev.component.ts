import { Component, Input, OnInit } from '@angular/core';
import { Dev } from 'src/app/interfaces/dev.models';

@Component({
  selector: 'app-card-dev',
  templateUrl: './card-dev.component.html',
  styleUrls: ['./card-dev.component.scss']
})
export class CardDevComponent implements OnInit {
  @Input() dev:Dev={
    fname:'',
    lname:'',
    image:'',
    position:'',
    socialMedia:[
      {
        name:'twitter',
        url:''
      },
      {
        name:'linkedin',
        url:''
      },
      {
        name:'github',
        url:''
      }
    ]
  };


  constructor() { }

  ngOnInit(): void {

  }

}
