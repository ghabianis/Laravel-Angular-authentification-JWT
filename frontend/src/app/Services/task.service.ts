import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';

const httpOption = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:9000/tasks';
  constructor(private httpClient: HttpClient) { }

  getTasks() : Observable<Task[]>{
     return this.httpClient.get<Task[]>(this.apiUrl);
  }
  DeleteTasks(id:any){
    return this.httpClient.delete<Task[]>(`${this.apiUrl}/`+id);
  }
  updateTaskReminder(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpClient.put<Task>(url, task, httpOption);
  }

  addTask(task: Task):Observable<Task> {
    return this.httpClient.post<Task>(this.apiUrl,task,httpOption);
  }
}
