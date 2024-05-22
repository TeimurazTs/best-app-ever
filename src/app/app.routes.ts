import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {MainLayoutComponent} from "./main-layout/main-layout.component";

export const routes: Routes = [
  {
    path: ':lang/:product/:video',
    component: MainLayoutComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/ka/casino/play-video',
    pathMatch: 'full'
  }

];
