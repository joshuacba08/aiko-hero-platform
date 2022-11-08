import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dev } from '../interfaces/dev.models';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://run.mocky.io/v3/2746281b-76e8-4949-9db6-aa77a0d1c09d';

  constructor( private htttpClient:HttpClient ){}


  getDevs(){
    return this.htttpClient.get<Dev[]>(this.url);
  }


}
