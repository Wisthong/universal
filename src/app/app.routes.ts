import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadComponent() {
      return import('@cliente/forms/forms.component')
    },
    title:'Cliente'
  }
];
