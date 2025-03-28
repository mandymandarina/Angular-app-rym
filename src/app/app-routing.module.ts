import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'characters-list', loadChildren: () => import('./components/character-list/character-list.module').then((m) => m.CharacterListModule) },
  
  { path: 'episodes', loadChildren: () => import('./components/episodes/episodes.module').then(m => m.EpisodesModule) },

  { path: 'locations', loadChildren: () => import('./components/locations/locations.module').then(m => m.LocationsModule) },
  
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
