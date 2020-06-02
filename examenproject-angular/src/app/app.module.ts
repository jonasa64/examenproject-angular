import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { NgxTimerModule } from 'ngx-timer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule, MatCard } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragAndDropService } from '../app/services/drag-and-drop.service';
import { QuizService } from './services/quiz.service';
import { QuizComponent } from './quiz/quiz.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { MerchComponent } from './merch/merch.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MerchService } from './services/merch.service'
import { FlashMessageModule } from 'angular-flash-message';


@NgModule({
  declarations: [
    AppComponent,
    DragDropComponent,
    QuizComponent,
    FrontPageComponent,
    NavbarComponent,
    FooterComponent,
    CartComponent,
    MerchComponent,
    ConfirmationComponent,
    MerchComponent

  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    NgxTimerModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatListModule,
    RouterModule.forRoot([
      { path: '', component: FrontPageComponent },
      { path: 'dragdrop', component: DragDropComponent },
      { path: 'quiz', component: QuizComponent },
      { path: 'merch', component: MerchComponent },
      { path: 'cart', component: CartComponent },
      { path: '**', redirectTo: 'home' }]),

  ],
  providers: [DragAndDropService, QuizService, MerchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
