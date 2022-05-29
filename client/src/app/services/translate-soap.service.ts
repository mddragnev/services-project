import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TranslateSoapService {
    constructor(private http: HttpClient) { }

    public translate(text: string, destLang: string, srcLang: string): Observable<any> {
        return this.http.get(`http://localhost:3001?text=${text}&dest=${destLang}&src=${srcLang}`);
    }

    public detect(text: string): Observable<any> {
        return this.http.get(`http://localhost:3001/detect?text=${text}`);
    }
}
