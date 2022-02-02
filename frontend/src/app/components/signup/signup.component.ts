import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public errors = null
  public form = {
     name: null,
     email: null,
     password: null,
     password_confirmation: null,
  };
  constructor(private jrwis : JarwisService, private route: Router, private token:TokenService) { }
  onSubmit(data:any){
    this.jrwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      errors => this.handleError(errors),
    );
  }
  handleError(errors:any){
    this.errors = errors.error.error;
    console.log(this.errors);
 }

 handleResponse(data:any){
  this.token.handle(data.access_token);
  this.route.navigateByUrl('/Login');
 }
  ngOnInit(): void {
  }

}
