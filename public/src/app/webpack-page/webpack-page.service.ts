import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable"

@Injectable()
export class WebpackPageService {
    
    constructor(private http: Http) { }

}