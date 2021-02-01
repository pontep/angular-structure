import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnonymousGuard } from './core/guard/anonymous.guard';
import { AuthenticationGuard } from './core/guard/authentication.guard';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layout/app-layout/app-layout.module').then(m => m.AppLayoutModule)
      }
    ],
    canActivate: [AuthenticationGuard]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layout/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ],
    canActivate: [AnonymousGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
