import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:"movies", loadChildren: () => import("./movies/movies.module").then(mod=>mod.MoviesModule)},
  {path:"account", loadChildren: () => import("./account/account.module").then(mod=>mod.AccountModule)},
  {path:"user", loadChildren: () => import("./user/user.module").then(mod=>mod.UserModule), canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
