import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dev } from '../interfaces/dev.models';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://run.mocky.io/v3/dc2a3564-802d-44e4-9dcb-0a0e6853d84e';

  constructor( private htttpClient:HttpClient ){}


  getDevs(){
    return this.htttpClient.get<Dev[]>(this.url);
  }


}
