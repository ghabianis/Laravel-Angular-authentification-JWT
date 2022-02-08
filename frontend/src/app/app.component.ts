import { Component } from '@angular/core';
import { LoaderService } from './loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(public load:LoaderService) { }
  ngOnInit() {
    window.setTimeout(()=>{
     this.load.isLoading.next(false);
   },1000)

 }
}
