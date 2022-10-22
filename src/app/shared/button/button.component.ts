import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {
  @Input() fontColor: string = '';
  @Input() state: boolean = false;
  @Input() title: string = 'click here!'

  show:boolean=false;

  constructor(){ }

  ngOnInit(): void {
    console.log('componente app-button iniciado');
  }

  onClick(e:any){
    console.log(e);
    this.show = !this.show;

  }

}
