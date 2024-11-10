import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddvoyageComponent } from './addvoyage/addvoyage.component';
import { ListComponent } from './list/list.component';
import { DetailsVoyageComponent } from './details-voyage/details-voyage.component';

const routes: Routes = [
  { path : 'addVoyage', component: AddvoyageComponent },
  { path : 'list', component: ListComponent},
  { path : 'list/:id', component: DetailsVoyageComponent},
  { path : '**', redirectTo: '/list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
