import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapSearch, bootstrapArrowLeft } from '@ng-icons/bootstrap-icons'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersPageComponent } from './characters-page/characters-page.component';
import { CharacterPageComponent } from './character-page/character-page.component';
import { CharactersComponent } from './characters-page/characters/characters.component';
import { CharacterComponent } from './characters-page/characters/character/character.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CharactersPageComponent,
    CharacterPageComponent,
    CharactersComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ bootstrapSearch, bootstrapArrowLeft }),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
