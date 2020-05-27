import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

    baseUrl = 'https://exam-backend-web.herokuapp.com/quiz';

    constructor(private http: HttpClient) { }

    getAllQuizzs() {
        return this.http.get(this.baseUrl)
    }


}