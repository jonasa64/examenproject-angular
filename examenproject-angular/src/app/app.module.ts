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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

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
import { LeaderbordService } from './services/leaderbodrd.service';
import { FlashMessageModule } from 'angular-flash-message';
import { DragDropLeaderbordComponent } from './drag-drop/leaderbord/leaderbord.component';
import { SortByPipe } from './drag-drop/leaderbord/leaderbord.pipe';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './edit/edit.component';
 
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
    MerchComponent,
    DragDropLeaderbordComponent,
    SortByPipe,
    LoginComponent,
    AdminComponent,
    EditComponent

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
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    // FlashMessageModule,
    // RouterModule.forRoot([
    //   { path: '', component: FrontPageComponent },
    //   { path: 'dragdrop', component: DragDropComponent },
    //   { path: 'quiz', component: QuizComponent },
    //   { path: 'merch', component: MerchComponent },
    //   { path: 'cart', component: CartComponent },
    //   { path: 'login', component: LoginComponent },
    //   { path: 'admin', component: AdminComponent },
    //   { path: '**', redirectTo: 'home' }]),

  ],
  providers: [DragAndDropService, QuizService, MerchService, LeaderbordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
