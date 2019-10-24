import { Injectable, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiService implements OnInit {
    private heroesUrl = 'app/apiservice/test.json';  // URL to web api

    constructor(private http: Http) { }
    ngOnInit() {
        this.getHeroes();
    }
    getHeroes(): Promise<any> {
        return this.http.get(this.heroesUrl).toPromise()
            .then(res => {
                const resJson = res.json();
                // console.log(resJson);
                if (resJson.errCode === '0') {
                    // console.log(resJson.errCode);
                    return resJson;
                }
                return resJson;
            });
    };

    changeHeros(): Promise<any> {
        return this.http.get(this.heroesUrl).toPromise()
            .then(res => {
                const resJson = res.json();
                console.log(resJson);
                if (resJson.errCode === '0') {
                    console.log(resJson.errCode);
                    return resJson;
                }
                return resJson;
            });
    }
    // private handleError(error: any): Promise<any> {
    //     console.error('An error occurred', error); // for demo purposes only
    //     return Promise.reject(error.message || error);
    // }
}
