import { Component, OnInit } from '@angular/core';
import { Group } from '../group';


@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent implements OnInit {

  model = new Group('','');

  submitted = false;

  onSubmit()
  {
    this.submitted = true;
  }




  constructor() { }

  ngOnInit() {
  }

}

