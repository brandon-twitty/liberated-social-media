import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
        {
            path: '',
            loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
        },
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
        path: 'verify-email',
        loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
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
    path: 'friends-list',
    loadChildren: () => import('./friends-list/friends-list.module').then( m => m.FriendsListPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'event-list',
    loadChildren: () => import('./event-list/event-list.module').then( m => m.EventListPageModule)
  },
    {
        path: 'events',
        loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
    },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'all-users',
    loadChildren: () => import('./all-users/all-users.module').then( m => m.AllUsersPageModule)
  },  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'upload-profile-img',
    loadChildren: () => import('./upload-profile-img/upload-profile-img.module').then( m => m.UploadProfileImgPageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
