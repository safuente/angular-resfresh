import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page';
import { HeroPageComponent } from './pages/hero/hero-page';
import { DragonballPageComponent } from './pages/dragonball-page/dragonball-page';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
    {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];
