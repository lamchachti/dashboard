import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MainComponent } from './views/dashboard/main/main.component';
import { OperationComponent } from './views/dashboard/operation/operation.component';
const routes: Routes = [
  { path: '', redirectTo:'dashboard',pathMatch:'full'},
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
      { path: '', component: MainComponent },
      {path:'operations',component:OperationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
