import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path:'', component:UserComponent, 
  children:[
    {path:'purchases', component:PurchasesComponent},
    {path:'favorites', component:FavoritesComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
