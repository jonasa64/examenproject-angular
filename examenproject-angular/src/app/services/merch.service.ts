import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable()

export class MerchService {
    baseUrl = 'https://exam-backend-web.herokuapp.com/shirts';

    constructor(private http: HttpClient) { }


    getAllShirts() {
        return this.http.get(this.baseUrl);
    }


}