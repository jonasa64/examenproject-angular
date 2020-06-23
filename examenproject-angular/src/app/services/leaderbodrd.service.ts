import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable()

export class LeaderbordService {
    dragDropUrl = 'https://exam-backend-web.herokuapp.com/leaderbord/dragdrop'
    quizUrl = 'https://exam-backend-web.herokuapp.com/leaderbord/quiz'

    constructor(private http: HttpClient) { }

    addDragDropLeaderdord(data) {
        return this.http.post(this.dragDropUrl, data, httpOptions);
    }

    addQuizLeaderdord(data) {
        return this.http.post(this.quizUrl, data, httpOptions);
    }

    getDragDropLeaderbord() {
        return this.http.get(this.dragDropUrl);
    }

    getQuizLeaderbord() {
        return this.http.get(this.quizUrl);
    }

}