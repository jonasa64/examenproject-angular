import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable()

export class MerchService {
    baseUrl = 'https://exam-backend-web.herokuapp.com/shirts';

    constructor(private http: HttpClient) { }


    getAllShirts() {
        return this.http.get(this.baseUrl);
    }

    create(data) {
        return this.http.post(this.baseUrl, data, httpOptions);
    }

    delete(id) {
        return this.http.delete(`${this.baseUrl}/`+id, httpOptions);
    }

    findOne(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    update(id, data) {
        return this.http.put(this.baseUrl+'/'+id, data, httpOptions);
    }


}