import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as e from 'cors';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';
import { HttpClient } from '@angular/common/http';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn? : boolean;
  fagithub = faGithub;
  constructor( private auth: AuthService,private route:Router , private token: TokenService) {

  }

  ngOnInit(): void {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(event: MouseEvent){
       event.preventDefault();
       this.token.remove();
       this.auth.changeAuthStatus(false);
       this.route.navigateByUrl('Login');
  }

}
