import { Component, OnInit } from '@angular/core';
import { CharactersServiceTsService } from '../characters.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.css'
})
export class CharactersPageComponent implements OnInit {
  character: { info?: { count: number }, results?: {}[]};
  data: {}[];
  name: string;
  totalCharacters: number;
  page = 1;

  constructor(private charactersService: CharactersServiceTsService) {}

  ngOnInit(): void {
    this.charactersService.getCharacters(this.page).subscribe((character) => {
      this.character = character;
      this.data = this.character.results
      this.totalCharacters = this.character.info.count
    })
  }
  
  queryName() {
    this.charactersService.getCharacterByName(this.name).subscribe((character) => {
      this.character = character;
      this.data = this.character.results
    })
  }
}
