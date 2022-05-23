import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {API_SECRET} from '../config'

@Injectable({
  providedIn: 'root'
})

export class PropertyService {

  apiUrl = 'https://api.airtable.com/v0/appqADUjhTZZw7od0/Projects';

  
  constructor(private http:HttpClient) { }

  getProperties(){
    return this.http.get<any>(this.apiUrl, { headers: new HttpHeaders({'Authorization': 'Bearer ' + API_SECRET})
  });
  }
  
  addProperty(data:any){
    return this.http.post(this.apiUrl, data, { headers: new HttpHeaders({'Authorization': 'Bearer ' + API_SECRET, 'content-type': 'application/json'})})
  }

  deleteProperty(id:Number){
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: new HttpHeaders({'Authorization': 'Bearer ' + API_SECRET})})
  }

}

