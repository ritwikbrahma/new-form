import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { NgDragDropModule} from 'ng-drag-drop';

import { AppComponent } from './app.component';
import { TagSearchComponent } from './tag-search/tag-search.component';
import { MatChip } from '@angular/material';
import { MatSortModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GroupFormComponent } from './group-form/group-form.component';
import { MatTableDataSource} from '@angular/material';
import { AddToJsonService } from './add-to-json.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    TagSearchComponent,
    GroupFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    NgDragDropModule.forRoot()
  ],
  providers: [MatChip,AddToJsonService],
  bootstrap: [AppComponent],
  exports: [ BrowserModule,HttpClientModule,]
})
export class AppModule { }
