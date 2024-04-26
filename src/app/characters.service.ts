import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersServiceTsService implements OnInit {
  private baseUrl = 'https://rickandmortyapi.com/api/character'

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }


  getCharacters(page: number): Observable<{}> {
    return this.http.get(`${this.baseUrl}/?page=${page}`)
  }

  getCharacter(id: number): Observable<{}> {
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  getCharacterByName(name: string): Observable<{}> {
    return this.http.get(`${this.baseUrl}?name=${name}`)
  }
}
