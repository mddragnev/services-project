import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TranslateRESTService {
    constructor(private http: HttpClient) { }

    public translate(text: string, destLang: string, srcLang: string): Observable<any> {
        return this.http.get(`http://127.0.0.1:5002/translate?text=${text}&dest=${destLang}&src=${srcLang}`, { responseType: 'text' });
    }
}
