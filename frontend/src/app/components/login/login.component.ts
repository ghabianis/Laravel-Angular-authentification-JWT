import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:any
  public error = null
  public form ={
      email:null,
      password:null
  }
  constructor(
     private jrwis: JarwisService ,
     private token: TokenService ,
     private route:Router,
     private auth : AuthService
     ) { }
  onSubmit(data:any){
    this.jrwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

 }
 handleError(error:any){
    this.error = error.error.error;
    console.log(this.error);
 }
 handleResponse(data:any){
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.route.navigateByUrl('/Profile');
 }
  ngOnInit(): void {
  }


}
