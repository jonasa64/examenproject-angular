import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { QuizService } from '../services/quiz.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  message = '';
  clickUsed = 0;
  questions: any;
  score = [];
  @ViewChild('elem') elem: ElementRef;

  constructor(private quizService: QuizService, private renderer2: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.quizService.getAllQuizzs().subscribe(quizzs => {
      console.log(quizzs);
      this.questions = quizzs;
    }, error => {
      console.log(error);
    })

  }


  clickAnswer(answer) {
    if (answer.isCorrect) {
      this.clickUsed++;
      this.score.push(this.clickUsed);
      this.clickUsed = 0;
      setTimeout(() => {
        this.message = 'answer is corret';
      }, 100);
      this.remove();
    } else {
      this.clickUsed++;
      setTimeout(() => {
        this.message = 'worng answer';
      }, 100);
      this.remove();
    }

  }

  calccScore() {
    return this.score.filter((el) => el === 1).length;
  }


  remove() {
    setTimeout(() => {
      this.renderer2.removeChild(this.el.nativeElement, this.elem.nativeElement);
    }, 2000)
  }


}
