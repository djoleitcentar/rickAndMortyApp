import { Component, Input, OnInit } from '@angular/core';
import { CharactersServiceTsService } from '../../characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {
  @Input() character;
  @Input() data: {};
  @Input() totalCharacters: number;
  @Input() page: number;
  arr;

  constructor (private charactersService: CharactersServiceTsService) {}

  ngOnInit(): void {
  }

  onScroll() {
    this.page++
    this.charactersService.getCharacters(this.page).subscribe((character) => {
      this.character = character;
      this.arr = Object.entries(this.data).map(([key, value]) => value)
      this.data = [...this.arr, ...this.character.results]
    })
  }
}