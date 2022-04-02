import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./pages/characters/characters.module').then(
        (m) => m.CharactersPageModule)
  },
  {
    path: 'characters/:id',
    loadChildren: () =>
      import('./pages/characters-details/characters-details.module').then(
        (m) => m.CharactersDetailsPageModule)
  },
  {
    path: 'episodes',
    loadChildren: () => import('./pages/episodes/episodes.module').then( m => m.EpisodesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
