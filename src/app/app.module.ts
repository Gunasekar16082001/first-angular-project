

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainbarComponent } from './mainbar/mainbar.component';
import { ShopComponent } from './shop/shop.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutsComponent } from './abouts/abouts.component';
import { DogsComponent } from './dogs/dogs.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    MainbarComponent,
    ShopComponent,
    ContactsComponent,
    AboutsComponent,
    DogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
