import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  constructor(private httpClient: HttpClient,private jawit: JarwisService,private taskServices:TaskService) { }

  ngOnInit(): void {
    //this.getUser()
  }
 /* getUser(){
    this.jawit.getuser(this.user).subscribe((e)=>{
      return this.user;
    })
  }*/

}
