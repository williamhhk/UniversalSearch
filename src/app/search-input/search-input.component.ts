import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { ApiService} from '../api.service'

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  myControl = new FormControl();
  options = [];
  filteredNames : Observable<any[]>;
  constructor(
    private apiService: ApiService
  ) {
  }
  ngOnInit() {
      this.filteredNames = this.myControl.valueChanges
         .startWith(null)
         .switchMap(val=>this.apiService.getAllOptions(val));
  }
  searchString(text: HTMLInputElement){
    console.log(text.value);
  }

}
