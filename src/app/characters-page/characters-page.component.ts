import { Component, OnInit } from '@angular/core';
import { CharactersServiceTsService } from '../characters.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.css'
})
export class CharactersPageComponent implements OnInit {
  character: { info?: {}, results?: {}[]};
  data: {}[];
  name: string;

  constructor(private charactersService: CharactersServiceTsService) {}

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((character) => {
      this.character = character;
      this.data = this.character.results
    })
  }

  queryName() {
    this.charactersService.getCharacterByName(this.name).subscribe((character) => {
      this.character = character;
      this.data = this.character.results
    })
  }
}
