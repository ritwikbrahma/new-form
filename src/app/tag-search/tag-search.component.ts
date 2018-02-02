import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {MatChipsModule} from '@angular/material/chips';

/**
 * @title Chips with input
 */
@Component({
  selector: 'app-tag-search',
  templateUrl: './tag-search.component.html',
  styleUrls: ['./tag-search.component.scss']
})
export class TagSearchComponent {

//boolean variables
  visible: boolean =  true;
  selectable: boolean = true;
  removable: boolean  = true;
  addOnBlur: boolean  = true;

  //Enter, comma are separator keycodes, clicking on them, adds a new tag
  separatorKeysCodes = [ENTER, COMMA];

  employees = [
    { name: 'Ritwik' },
    { name: 'Richi'},
    { name: 'Priyanka'},
  ];

//Add names 
 add(event: MatChipInputEvent): void {
  let input = event.input;
  let value = event.value;

  // Add our name
  if ((value || '').trim()) {
    this.employees.push({ name: value.trim() });
  }

  // Reset the input value
  if (input) {
    input.value = '';
  }
}

remove(employee: any): void {
  let index = this.employees.indexOf(employee);

  if (index >= 0) {
    this.employees.splice(index, 1);
  }
}
}
 

  
