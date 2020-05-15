import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

    baseUrl = 'http://localhost:3000/quiz';

    constructor(private http: HttpClient) { }

    getAllQuizzs() {
        return this.http.get(this.baseUrl)
    }


}