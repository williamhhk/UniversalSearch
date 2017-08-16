import { Component, OnInit } from '@angular/core';
import { FormControl , ReactiveFormsModule} from '@angular/forms'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/debounceTime';
import { ApiService} from '../../services/api.service'

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
      console.log(this.myControl.value);
      this.filteredNames = this.myControl.valueChanges
          .debounceTime(300)
         .startWith(null)
         .switchMap(val=> this.apiService.getAllOptions(val))
         .share();
  }
  searchString(){
    console.log(this.myControl.value);
  }

}
