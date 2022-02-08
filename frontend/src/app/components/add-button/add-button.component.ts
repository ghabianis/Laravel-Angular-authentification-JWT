import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {

  @Input() text?: String;
  @Input() color?: String;
   state : boolean = false;
  @Output() btnClick = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.btnClick.emit();
 }

}
