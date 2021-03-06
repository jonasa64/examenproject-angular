import { Component, OnInit, ViewChild, ElementRef, Renderer2, ViewContainerRef, TemplateRef } from '@angular/core';
import { moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';
import { countUpTimerConfigModel, timerTexts, CountupTimerService } from 'ngx-timer';
import { DragAndDropService } from '../services/drag-and-drop.service';
import { DragAndDrop } from './drag-drop'
import { Router } from '@angular/router';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  @ViewChild('flash') elem: ElementRef;
  time: any;
  itemsSolutions = [];

  itemConsequences = [

  ];

  solutions = [];

  consequences = [];

  testConfig;

  isgameStarted = false;

  constructor(private countUpTimer: CountupTimerService, private dragAndDrop: DragAndDropService, private router: Router, private renderer2: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {

    // countUpTimerConfigModel
    this.testConfig = new countUpTimerConfigModel();

    // custom class
    this.testConfig.timerClass = 'test_Timer_class';

    // timer text values
    this.testConfig.timerTexts = new timerTexts();
    this.testConfig.timerTexts.hourText = 'Hours'; // default - hh
    this.testConfig.timerTexts.minuteText = 'Minutes'; // default - mm
    this.testConfig.timerTexts.secondsText = 'Seconds'; // default - ss

    this.dragAndDrop.getAllDragAndDrops().subscribe((data: DragAndDrop[]) => {
      this.itemsSolutions = data.filter(el => el.type === 'solution');
      this.itemConsequences = data.filter(el => el.type === 'consequence');
    }, error => {
      console.log(error);
    })

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

  startTime() {
    this.isgameStarted = true;
    return this.countUpTimer.startTimer();
  }

  pauseTimer() {
    return this.countUpTimer.pauseTimer();
  }

  endGame() {
    if (this.solutions.length === 3 && this.consequences.length === 3) {
      this.pauseTimer();
      this.removeFlash();
      this.isgameStarted = false;
      this.time = this.countUpTimer.timerValue;
      //console.log(this.time);
      return true;
    }
    return false;
  }

  removeFlash() {
    setTimeout(() => {
      this.renderer2.removeChild(this.el.nativeElement, this.elem.nativeElement);
    }, 2000)
  }

}
