import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { AddCatComponent } from './components/add-cat/add-cat.component';
import { CardComponent } from './shared-components/card/card.component';
import { RatingComponent } from './shared-components/rating/rating.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CatalogComponent,
    AddCatComponent,
    CardComponent,
    RatingComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
