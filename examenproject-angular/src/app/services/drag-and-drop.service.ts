import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()

export class DragAndDropService {
    baseUrl = 'https://exam-backend-web.herokuapp.com/dragDrop';

    constructor(private http: HttpClient) { }

    getAllDragAndDrops() {
        return this.http.get(this.baseUrl);
    }


}