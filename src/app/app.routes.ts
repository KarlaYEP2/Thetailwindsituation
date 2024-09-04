import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LanguagesComponent } from './Pages/languages/languages.component';
import { TimelineComponent } from './Pages/timeline/timeline.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home page' },
  { path: 'languages', component: LanguagesComponent },
  { path: 'timeline', component: TimelineComponent },
];
