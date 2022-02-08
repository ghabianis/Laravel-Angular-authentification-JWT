import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskService } from 'src/app/Services/task.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() Task? : Task;
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }
  onDelete(id:any){
    this.taskService.DeleteTasks(this.Task?.id).subscribe(()=>{
      window.location.reload();
    });
  }

  onToggle(task:any){
    this.onToggleReminder.emit(task);
  }
}
