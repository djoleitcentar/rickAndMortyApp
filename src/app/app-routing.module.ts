import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from './characters-page/characters-page.component';
import { CharacterPageComponent } from './character-page/character-page.component';

const routes: Routes = [
  { path: '', component: CharactersPageComponent},
  { path: ':id', component: CharacterPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
