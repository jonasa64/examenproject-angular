import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxTimerModule } from 'ngx-timer';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragAndDropService } from '../app/services/drag-and-drop.service';

@NgModule({
  declarations: [
    AppComponent,
    DragDropComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    NgxTimerModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [DragAndDropService],
  bootstrap: [AppComponent]
})
export class AppModule { }
