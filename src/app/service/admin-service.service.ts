import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService 
{

  constructor(private _http:HttpClient,private _router:Router) { }

  private url="local";


  getAllRecord(){
    this._http.get(this.url);

  }

  newRegistration(){

  }


}
