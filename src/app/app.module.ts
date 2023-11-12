import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//i add this 

import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header/header.component';

import {InputSwitchModule} from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';


import { NgSelectModule } from '@ng-select/ng-select'; // Import NgSelectModule

import { CommonModule } from '@angular/common'; // Import CommonModule

import { WjInputModule } from '@grapecity/wijmo.angular2.input';










@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule, // Import any other PrimeNG modules you need
    InputSwitchModule,
    FormsModule,
    CalendarModule, // Import CalendarModule here
    CommonModule,
    NgSelectModule,
    WjInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
