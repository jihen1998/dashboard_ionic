import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {LoginGuardGuard} from './routeGuard/login-guard.guard';
import {DashboardGuard} from './routeGuard/dashboard.guard';

const routes: Routes = [
  {path: 'loginform', component: LoginFormComponent, canActivate: [LoginGuardGuard]},
  {path: '', redirectTo: 'loginform', pathMatch: 'full'},
  {path: '', component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {path: '**', redirectTo: 'dashboard', canActivate: [DashboardGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
