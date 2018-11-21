import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewtaskComponent } from './task/viewtask/viewtask.component';
import { AddtaskComponent } from './task/addtask/addtask.component';
import { AppRoutingModule } from './app-routing.module';
import { AddprojectComponent } from './project/addproject/addproject.component';
import { AdduserComponent } from './user/adduser/adduser.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewtaskComponent,
    AddtaskComponent,
    AddprojectComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
