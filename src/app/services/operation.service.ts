import { Injectable } from '@angular/core';
import { Operation } from '../interfaces/operation.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  apiUrl:any=API // from config file
  constructor(private http: HttpClient) { }
  getList(): Observable<Operation[]> {
    return this.http.get<any>(`${this.apiUrl.baseUrl+'/'+this.apiUrl.services[1].name+'/'+this.apiUrl.services[1].endpoints[0]}`);
  }
  del(id:number):Observable<any> {
    return this.http.delete(`${this.apiUrl.baseUrl + '/' + this.apiUrl.services[1].name + '/' + this.apiUrl.services[1].endpoints[1] + '/' + id}`);
  }
  add(operation:Operation){
    console.log(operation)
    return this.http.post(`${this.apiUrl.baseUrl + '/' + this.apiUrl.services[1].name + '/' + this.apiUrl.services[1].endpoints[2] + '/'}`,
      operation
    );
  }
}
