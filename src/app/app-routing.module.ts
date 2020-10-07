import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

        {
            path: 'registration',
            loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
        },
      {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
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
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'upload-profile-img',
    loadChildren: () => import('./upload-profile-img/upload-profile-img.module').then( m => m.UploadProfileImgPageModule)
  },
  {
    path: 'intro-prof',
    loadChildren: () => import('./intro-prof/intro-prof.module').then( m => m.IntroProfPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'list-of-profiles',
    loadChildren: () => import('./list-of-profiles/list-of-profiles.module').then( m => m.ListOfProfilesPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
