import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable"

@Injectable()
export class HomeService {
    
    constructor(private http: Http) { }

}