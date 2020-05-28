import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  clickUsed = 0;
  questions: any;
  score = [];
  constructor(private quizService: QuizService) { }

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
    } else {
      this.clickUsed++;
    }

  }

  calccScore() {
    return this.score.filter((el) => el === 1).length;
  }

}
