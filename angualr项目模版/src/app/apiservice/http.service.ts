import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService implements OnInit {
    public headers = new Headers({
        // Authorization: localStorage.getItem('Authorization'),
        // limit: null,
        // offset: null,
    });
    public options = {
        // withCredentials: true,
        // headers: this.headers
    };
    constructor(
        // public jsonp: Jsonp,
        public http: Http
    ) { }
    public ngOnInit() {
        // console.log('Initial App State', this.appState.state);
    }
    /*
     *   url: 服务器api接口地址
     *   params: 传递参数对象
     */
    // get方法
    httpGet(url) {
        return this.http.get(url, this.options).toPromise()
            .then(res => {
                const resJson = res.json();
                if (resJson.errCode === '0') {
                    return resJson;
                }
                return resJson;
            });
    }
    // post方法
    httpPost(url, params) {
        return this.http.post(url, params, this.options).toPromise()
            .then(res => {
                const resJson = res.json();
                this.handleToken(resJson);
                return resJson;
            });
    }
    // patch
    httpPatch(url, body) {
        console.log(url);
        return this.http.patch(url, body, this.options).toPromise()
            .then(res => {
                const resJson = res.json();
                this.handleToken(resJson);
                return resJson;
            });
    }
    // delete方法
    httpDelete(url) {
        return this.http.delete(url, this.options).toPromise()
            .then(res => {
                const resJson = res.json();
                this.handleToken(resJson);
                return resJson;
            });
    }
    // // 跨域get
    // jsonpGet(url, params) {
    //     return this.jsonp.get(url, this.options).map(res => {

    //         const resJson = res.json();
    //         this.handleToken(resJson);
    //         return resJson;

    //     });
    // }
    // // 跨域post
    // jsonpPost(url, params) {
    //     return this.jsonp.post(url, this.options).map(res => {
    //         const resJson = res.json();
    //         this.handleToken(resJson);
    //         return resJson;

    //     });
    // }
    // 处理token
    getToken(data) {
        if (data.token) {
            return data.token;
        } else {
            return false;
        }
    }
    setToken(value) {
        // this.headers.set('Authorization', value);
        localStorage.setItem('Authorization', value);
    }
    handleToken(data) {
        if (this.getToken(data)) {
            this.setToken(this.getToken(data));
        }
    }
}
