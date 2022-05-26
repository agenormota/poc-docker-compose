import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';

@Injectable()
export class tb_testeApiService {
    private siteUrl = environment.apiHost + '/tb_teste';

    constructor(private http: HttpClient) { }

    deletetb_teste(id): Observable<any> {
        return this.http.delete<any>(this.siteUrl + "/" + id);
    }

    addtb_teste(data): Observable<any> {
        return this.http.post<any>(this.siteUrl, data);
    }

    updatetb_teste(data): Observable<any> {
        return this.http.put<any>(this.siteUrl, data);
    }

    gettb_testeByID(id: string): Observable<any> {
        return this.http.get(this.siteUrl + '/' + id);
    }

    getAlltb_testes(): Observable<any> {
        return this.http.get(this.siteUrl);
    }
}











