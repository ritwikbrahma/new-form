import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
import { AddToJsonService } from '../add-to-json.service';



@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent implements OnInit {

  model = new Group('', '');

  submitted = false;
  constructor(private add:AddToJsonService) { }


  onSubmit() {
    this.add.putDescriptionTitle(this.model).subscribe();
    this.submitted = true;
  }






  ngOnInit() {
  }

}

