import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchString(text: HTMLInputElement){
    console.log(text.value);
  }

}
