import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersServiceTsService implements OnInit {
  private baseUrl = 'https://rickandmortyapi.com/api/character'

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }


  getCharacters(): Observable<{}> {
    return this.http.get(`${this.baseUrl}`)
  }

  getCharacter(id): Observable<{}> {
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  getCharacterByName(name): Observable<{}> {
    return this.http.get(`${this.baseUrl}?name=${name}`)
  }
}
