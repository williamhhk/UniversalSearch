import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

    public getAllOptions(searchStr){
      console.log('search >>' + searchStr + '<<');
      if (searchStr == '')
        return Observable.of([]);
      return this.http
        .get('http://localhost:3000/options?name_like='+searchStr)
        .map(response => {
          console.log(response.json())
          return response.json();
        });
    }


}
