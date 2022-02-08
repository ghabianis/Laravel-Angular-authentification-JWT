import { Component, OnInit,Output } from '@angular/core';
import { TaskService } from 'src/app/Services/task.service';
import { Task } from '../../Task';
import { EventEmitter } from 'stream';
import { timeout } from 'rxjs/operators';
import { TASKS } from 'src/app/mock-tasks';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public tasks: Task[]  = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    setTimeout(()=>{                           //<<<---using ()=> syntax
      this.taskService.getTasks().subscribe((tasks:any)=> {
      (this.tasks = tasks
      )});
     }, 5000);

  }

  onToggleReminder(task:Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
 }
 addTask(task:Task){
   this.taskService.addTask(task).subscribe((task) =>(this.tasks.push(task)));
}


}
