import { Component, OnInit } from '@angular/core';
import { moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {


  itemsSolutions = [
    'Save on your electricity and heat consumption',
    'Planting of forest',
    'Take the bike or public transport'
  ];

  itemConsequences = [
    'Southern and Central Europe are seeing more heat waves, forest fires and droughts',
    'Northern Europe is getting significantly wetter and it can become common with winter floods.',
    'the concentration of CO2 in the atmosphere had risen steadily 285 ppm before industrialization in 1750 to 410 ppm today.'
  ];

  solutions = [];

  consequences = [];

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:ban-types
  drop(event: CdkDragDrop<String[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  reset() {
    return window.location.reload();
  }

}
