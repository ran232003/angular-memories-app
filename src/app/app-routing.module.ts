import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomepageComponent } from './homepage/homepage.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: LandingPageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'auth/:status', component: AuthComponent },
  //   { path: 'homepage', component: HomepageComponent },
  //   { path: 'favorites', component: FavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRouting {}
