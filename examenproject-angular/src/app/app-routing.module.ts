import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component'
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { QuizComponent } from './quiz/quiz.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent},
  { path: 'dragdrop', component: DragDropComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'cart', component: CartComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
