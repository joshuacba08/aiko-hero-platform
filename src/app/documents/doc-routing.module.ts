import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocComponent } from './pages/doc/doc.component';
import { CustomizedComponent } from './pages/customized/customized.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { MethodsComponent } from './pages/methods/methods.component';



const routes: Routes = [
  {
    path:'',
    component:DocComponent,
    children:[
      {
        path:'getstarted',
        component:GetStartedComponent
      },
      {
        path:'customized',
        component:CustomizedComponent
      },
      {
        path:'methods',
        component:MethodsComponent
      }

    ]
  }
]

@NgModule({
  imports:[ RouterModule.forChild( routes )],
  exports:[ RouterModule ]
})

export class DocRoutingModule{}
