import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCatComponent } from './components/add-cat/add-cat.component';
import { CatalogComponent } from './components/catalog/catalog.component';


const routes: Routes = [
  { path: 'cat-a-log', component: CatalogComponent },
  { path: 'add_a_cat', component: AddCatComponent },
  { path: '',   redirectTo: '/cat-a-log', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
