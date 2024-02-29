import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Task } from '../../interfaces/interfaces';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TasksService } from '../../services/tasks.service';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss'
})
export class ToDoComponent implements OnInit {


todoForm !: FormGroup;
tasks : Task[] = [];
 inprogress: Task[] = [];
done: any [] = [];
updateIndex!: any;


constructor(private fb : FormBuilder ,
  private taskservices: TasksService){}


  ngOnInit(): void {
this.todoForm = this.fb.group({
  item:['', Validators.required]
});

    this.taskservices.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    })
    this.todoForm.reset();

  }

  async onClickDelete(tasks : Task){
    const response = await this.taskservices.deleteTask(tasks);
    console.log(response);

  }

  async onClickDeleteInprogress(tasks : Task){
    const response = await this.taskservices.deleteTask(tasks);
    console.log(response);

  }

  async onClickDeleteDone(tasks : Task){
    const response = await this.taskservices.deleteTask(tasks);
    console.log(response);

  }





  async onSubmit(){
    console.log(this.todoForm.value)
    const response = await this.taskservices.addTask(this.todoForm.value);
    console.log(response);
  }










  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
