import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()

export class DragAndDropService {
    baseUrl = 'http://localhost:3000/dragDrop';

    constructor(private http: HttpClient) { }

    getAllDragAndDrops() {
        return this.http.get(this.baseUrl);
    }


}