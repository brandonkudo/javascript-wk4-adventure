import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Good1Component } from './good1/good1.component';
import { Bad1Component } from './bad1/bad1.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'pages/1',
    component: Good1Component
  },
  {
    path: 'pages/:id',
    component: Bad1Component
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
