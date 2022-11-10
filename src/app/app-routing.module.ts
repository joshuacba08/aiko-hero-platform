import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExamplesComponent } from './pages/examples/examples.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes =[
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'document',
    loadChildren: ()=> import('./documents/documents.module').then( (m)=>m.DocumentsModule)
  },
  {
    path:'examples',
    component: ExamplesComponent
  },
  {
    path:'team',
    component: TeamComponent
  }
]

@NgModule({
  imports:[ RouterModule.forRoot( routes )],
  exports:[ RouterModule ]
})

export class AppRoutingModule{}
