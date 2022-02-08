import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/loader/loader.service';
import { UiService } from 'src/app/Services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title : String = 'Task Tracer';
  showAddTask? : boolean = false;
  subscription? : Subscription;

  constructor(private ui:UiService , private router:Router, public Loader:LoaderService) {

    this.subscription = this.ui.onToggle().subscribe(value => this.showAddTask = value);

   }

  ngOnInit(): void {
  }
  toggleAddTask(){
    this.ui.toggleAddTask();
 }

 hasRouter(route:String){
   return this.router.url === route;
 }
}
