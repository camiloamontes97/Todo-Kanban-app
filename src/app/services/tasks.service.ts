import { Injectable } from '@angular/core';
import { Firestore, collectionData, deleteDoc } from '@angular/fire/firestore';
import {  Task } from '../interfaces/interfaces';
import { addDoc, collection, doc } from '@firebase/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private firestore: Firestore) { }


  addTask(description: Task){

    const taskRef = collection(this.firestore,'tasks')
    return addDoc(taskRef, description)

  }

getTasks(): Observable<Task[]>{
  const taskRef = collection(this.firestore, 'tasks');
  return collectionData(taskRef, {idField: 'id'}) as Observable<Task[]>;

}

deleteTask(tasks: Task){
const tasksDocRef =doc(this.firestore, `tasks/${tasks.id}`);
return deleteDoc(tasksDocRef);
}

}
