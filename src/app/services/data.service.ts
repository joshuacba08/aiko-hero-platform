import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dev } from '../interfaces/dev.models';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://run.mocky.io/v3/91ea3270-ca59-4d42-a4ce-47175d94b1d8';

  constructor( private htttpClient:HttpClient ){}


  getDevs(){
    return this.htttpClient.get<Dev[]>(this.url);
  }


}
