import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { authGuard } from '../shared/auth.guard';

export const routes: Routes = [
  { path: '', component: CharactersComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'users', component: UserComponent },
      { path: 'profil', component: UserProfileComponent },
    ],
    canActivate: [authGuard],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
