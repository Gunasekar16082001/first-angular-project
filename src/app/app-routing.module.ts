import { DogsComponent } from './dogs/dogs.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutsComponent } from './abouts/abouts.component';
import { ShopComponent } from './shop/shop.component';
import { MainbarComponent } from './mainbar/mainbar.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
         path:'',
         component:MainbarComponent
       },
    
     {
        path:'shop',
         component:ShopComponent
      },

      {
        path:'abouts',
        component:AboutsComponent
      },
      {
        path:'contacts',
        component:ContactsComponent
      },
      {
        path:'dogs',
        component:DogsComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



