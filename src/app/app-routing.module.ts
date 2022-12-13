import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomepageComponent } from './homepage/homepage.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { MemoriesComponent } from './memories/memories.component';
const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: LandingPageComponent },
  { path: 'memories', component: MemoriesComponent },
  { path: 'auth/:status', component: AuthComponent },
  { path: 'add-memory', component: AddPostComponent },
  //   { path: 'homepage', component: HomepageComponent },
  //   { path: 'favorites', component: FavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRouting {}
