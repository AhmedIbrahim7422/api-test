import { UserDataComponent } from './../../pages/user-data/user-data.component';
import { DataComponent } from 'src/app/pages/users_data/data.component';
import { UsersComponent } from './../../pages/users/users.component';
import { LandingComponent } from './components/landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: LandingComponent,
    children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users', component: UsersComponent},
      {path: 'users_data', component: DataComponent},
      {path: 'add_user', component: UserDataComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
