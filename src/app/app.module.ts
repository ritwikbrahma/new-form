import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { TagSearchComponent } from './tag-search/tag-search.component';
import { MatChip } from '@angular/material';
import { MatSortModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GroupFormComponent } from './group-form/group-form.component';
import { MatTableDataSource} from '@angular/material'; 


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
    FormsModule
  ],
  providers: [MatChip],
  bootstrap: [AppComponent]
})
export class AppModule { }
