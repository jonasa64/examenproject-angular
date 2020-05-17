import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: any;
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
      alert('answer is correct');
    } else {
      alert('answer is worng');
    }

  }

}
