import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './views/dashboard/main/main.component';
import { OperationComponent } from './views/dashboard/operation/operation.component';
import { ProjectsComponent } from './views/dashboard/main/projects/projects.component';
import { TasksComponent } from './views/dashboard/main/tasks/tasks.component';
import { TagInputComponent } from './views/shared/tag-input/tag-input.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProjectsComponent,
    TasksComponent,
    TagInputComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
