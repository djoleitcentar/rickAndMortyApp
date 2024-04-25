import { Component, OnInit } from '@angular/core';
import { CharactersServiceTsService } from '../characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrl: './character-page.component.css'
})
export class CharacterPageComponent implements OnInit {
  character;
  infoSections =  ["Species", "Origin", "Location", "Status", "Gender"];
  infoParagraphs = [];
  originName: string;
  locationName: string;

  constructor(private route: ActivatedRoute, private charactersService: CharactersServiceTsService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.charactersService.getCharacter(id).subscribe((character) => {
        this.character = character
        this.originName =
        this.character.origin?.name.length > 13 ? this.character.origin?.name.split(" ")[0] : this.character.origin?.name;
        this.locationName =
        this.character.location?.name.length > 16 ? this.character.location?.name.split(" ")[0] : this.character.location?.name;
    
        this.infoParagraphs = [this.character.species, this.originName, this.locationName, this.character.status, this.character.gender];
      })
    });

  }
}
