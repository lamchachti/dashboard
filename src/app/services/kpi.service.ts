import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API} from '../config/app.config';
import { Kpi } from '../interfaces/kpi.module';

@Injectable({
  providedIn: 'root'
})
export class KpiService {
  apiUrl:any=API // from config file
  constructor(private http:HttpClient) {   }
  getList(): Observable<Kpi[]> {
    return this.http.get<any>(`${this.apiUrl.baseUrl+'/'+this.apiUrl.services[0].name+'/'+this.apiUrl.services[0].endpoints[0]}`);
  }
  getFiltredByType(){
    const body = { type: 'projectlist' };
    return this.http.post<any>(`${this.apiUrl.baseUrl+'/'+this.apiUrl.services[0].name+'/'+this.apiUrl.services[0].endpoints[1]}`,
      body
    );
  }
}
