import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links:any[]=[
    {
      path:'',
      name:'inicio'
    },
    {
      path:'document',
      name:'documentación'
    },
    {
      path:'examples',
      name:'ejemplos'
    },
    {
      path:'team',
      name:'nuestro equipo'
    }

  ]


  public active : boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  setActive(): void{
    this.active = !this.active
  }


}
