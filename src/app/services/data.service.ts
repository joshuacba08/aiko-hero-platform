import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dev } from '../interfaces/dev.models';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://run.mocky.io/v3/d8db6532-88b1-4d2f-80a3-571b42807d54';

  constructor( private htttpClient:HttpClient ){}


  getDevs(){
    return this.htttpClient.get<Dev[]>(this.url);
  }


}
