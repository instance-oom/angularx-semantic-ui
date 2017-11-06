import { Component } from '@angular/core';

@Component({
  selector: 'dropdown-demo',
  templateUrl: './dropdown.html'
})

export class DropdownDemoPage {

  selectedColor: string;
  selectedPerson: any;
  selectedPersons: Array<any> = [];
  colors: Array<string> = [];
  persons: Array<any> = [];
  fieldForShow: string;

  constructor() {

  }

  ngOnInit() {
    this.colors = ["Green", "Red", "Blue", "Yellow", "Black"];
    this.persons = [
      {
        "id": 1,
        "name": "Tom",
        "age": 18
      }, {
        "id": 2,
        "name": "Jerry",
        "age": 25
      }, {
        "id": 3,
        "name": "Jim",
        "age": 15
      }
    ]
    this.fieldForShow = "name";
    this.selectedColor = 'Blue';
    this.selectedPerson = this.persons[1];
    this.selectedPersons.push(this.persons[2]);
  }
}
