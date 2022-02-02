import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { JarwisService } from 'src/app/Services/jarwis.service';
@Component({
  selector: 'app-reponse-reset',
  templateUrl: './reponse-reset.component.html',
  styleUrls: ['./reponse-reset.component.css']
})
export class ReponseResetComponent implements OnInit {
  public error = [

  ]

  public form = {
      email:null,
      password: null,
      confirmPassword: null,
      resetToken : null
  }
  constructor(private route: ActivatedRoute ,private jarwis:JarwisService) {
    route.queryParams.subscribe(params =>{
      this.form.resetToken = params['token']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data:any){
    this.jarwis.changePassword(this.form).subscribe(
        data => this.handleResponse(data),
        error =>this.handleError(error)
    )
  }

  handleResponse(data:any){

  }

  handleError(error:any){

  }

}
