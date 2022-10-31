import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dev } from '../interfaces/dev.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://run.mocky.io/v3/30a754a7-d404-4194-8571-7ffc0d510e8b';

  constructor( private htttpClient:HttpClient ){}


  getDevs(){
    return this.htttpClient.get<Dev[]>(this.url);
  }


}
