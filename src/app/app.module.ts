import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { enviroments } from './enviroments/enviroments';
// firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
//angular material
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule } from '@angular/forms';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DragDropModule} from '@angular/cdk/drag-drop';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ToDoComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    DragDropModule,
    
    


    
    provideFirebaseApp(() => initializeApp({"projectId":"kanban-v1-eee2b","appId":"1:285674776682:web:3bd85a0b1be1476045c213","storageBucket":"kanban-v1-eee2b.appspot.com","apiKey":"AIzaSyDJsippRPbuZEKlN3K5pBJqnvh28PE35TQ","authDomain":"kanban-v1-eee2b.firebaseapp.com","messagingSenderId":"285674776682"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
