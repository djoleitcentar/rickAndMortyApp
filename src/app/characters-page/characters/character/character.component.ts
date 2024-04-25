import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent implements OnInit {
  @Input() data: {};
  @Input() index: number;
  infoSections =  ["Species", "Origin", "Location"];
  infoParagraphs = [];
  originName: string;
  locationName: string;


  ngOnInit(): void {
    this.originName =
    this.data[this.index].origin?.name.length > 13 ? this.data[this.index].origin?.name.split(" ")[0] : this.data[this.index].origin?.name;
    this.locationName =
    this.data[this.index].location?.name.length > 16 ? this.data[this.index].location?.name.split(" ")[0] : this.data[this.index].location?.name;

    this.infoParagraphs = [this.data[this.index].species, this.originName, this.locationName];
  }

}
