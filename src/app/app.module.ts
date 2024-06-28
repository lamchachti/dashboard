import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './views/dashboard/main/main.component';
import { TasksComponent } from './views/dashboard/main/tasks/tasks.component';
import { TagInputComponent } from './views/shared/operation-form/tag-input/tag-input.component';
import { ProjectsComponent } from './views/dashboard/main/projects/projects.component';
import { FormsModule } from '@angular/forms';
import { OperationComponent } from './views/dashboard/operation/operation.component';
import { OperationFormComponent } from './views/shared/operation-form/operation-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProjectsComponent,
    OperationComponent,
    TasksComponent,
    TagInputComponent,
    OperationFormComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
