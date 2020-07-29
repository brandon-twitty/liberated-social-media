import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'reg-v-two',
    loadChildren: () => import('./reg-v-two/reg-v-two.module').then( m => m.RegVTwoPageModule)
  },
  {
    path: 'grid-tiles',
    loadChildren: () => import('./grid-tiles/grid-tiles.module').then( m => m.GridTilesPageModule)
  },
  {
    path: 'create-friend',
    loadChildren: () => import('./create-friend/create-friend.module').then(m => m.CreateFriendPageModule)
  },
  {
    path: 'create-friend',
    loadChildren: () => import('./create-friend/create-friend.module').then( m => m.CreateFriendPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
