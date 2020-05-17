import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxTimerModule } from 'ngx-timer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatCardModule, MatCard } from '@angular/material/card'; 

import { AppComponent } from './app.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    DragDropComponent,
    FrontPageComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    NgxTimerModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
