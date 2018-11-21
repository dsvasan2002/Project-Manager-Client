import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewtaskComponent } from './task/viewtask/viewtask.component';
import { AddtaskComponent } from './task/addtask/addtask.component';

const routes: Routes = [
    {path: 'viewTask', component: ViewtaskComponent},
    {path: 'addTask',  component: AddtaskComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'viewTask'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
