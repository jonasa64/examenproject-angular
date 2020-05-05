import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< Updated upstream

@NgModule({
  declarations: [
    AppComponent
=======
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropComponent,
    MemoryGameComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
