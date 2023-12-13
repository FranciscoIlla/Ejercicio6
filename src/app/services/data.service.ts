import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Posts} from "../common/interface";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Posts[]>{
    return this.http.get<Posts[]>(
      'https://jsonplaceholder.typicode.com/posts');
    }
  }



