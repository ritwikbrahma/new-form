import { Injectable } from '@angular/core';
import { Group } from './group';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable()
export class AddToJsonService {

  private titles_descriptionsURL = '../assets/titlesDescriptions.json' 
  private tagsURL = '../assets/tags.json' 
  

  /** Put descriptions and titles */
  putDescriptionTitle (details: Group ): Observable<Group[]>{
    return this.http.post<Group[]>('../assets/tags.json', Group, httpOptions);
    
 }


  constructor(private http: HttpClient) { }

}
