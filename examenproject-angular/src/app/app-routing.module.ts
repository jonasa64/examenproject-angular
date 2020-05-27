import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { FrontPageComponent } from './front-page/front-page.component'
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { QuizComponent } from './quiz/quiz.component';
import { CartComponent } from './cart/cart.component';
import { MerchComponent } from './merch/merch.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent},
  { path: 'dragdrop', component: DragDropComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'merch', component: MerchComponent},
  { path: 'cart', component: CartComponent},
  { path: 'confirmation', component: ConfirmationComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppRoutingModule { }
