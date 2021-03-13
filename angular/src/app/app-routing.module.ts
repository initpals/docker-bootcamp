import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsListComponent } from './components/Persons-list/Persons-list.component';
import { PersonDetailsComponent } from './components/Person-details/Person-details.component';
import { AddPersonComponent } from './components/add-Person/add-Person.component';

const routes: Routes = [
  { path: '', redirectTo: 'Persons', pathMatch: 'full' },
  { path: 'Persons', component: PersonsListComponent },
  { path: 'Persons/:id', component: PersonDetailsComponent },
  { path: 'add', component: AddPersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
