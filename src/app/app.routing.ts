import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LevelOneComponent } from './level-one/level-one.component';
import { LevelTwoComponent } from './level-two/level-two.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'pages/:id',
    component: LevelOneComponent
  },
  {
    path: 'pages/:id',
    component: LevelTwoComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
