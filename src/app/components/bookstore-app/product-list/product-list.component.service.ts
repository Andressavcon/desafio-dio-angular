import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from "./model/Book";

@Injectable()

export class BookService
{

  private url = 'https://sheet.best/api/sheets/7fc47565-56fd-4e7f-b32f-5c8f060a741f';

  httpOptions = {
    Headers : new HttpHeaders({'content-type': 'application/json'}) 
  }

  constructor(private http:HttpClient){}

  getBook(){
    return this.http.get(this.url)
  }
}