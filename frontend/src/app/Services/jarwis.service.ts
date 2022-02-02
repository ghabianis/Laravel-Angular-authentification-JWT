import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {
  private baseUrl = 'http://127.0.0.1:8000/api';
  constructor(private http:HttpClient) { }




  login(data:any){
    return this.http.post(`${this.baseUrl}/login`,data);

  }
  signup(data:any){
    return this.http.post(`${this.baseUrl}/signup`,data);

  }
  sendPasswordResetLink(data:any){
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`,data);
  }

  changePassword(data:any){
    return this.http.post(`${this.baseUrl}/ChangePassword`,data);
  }

}
