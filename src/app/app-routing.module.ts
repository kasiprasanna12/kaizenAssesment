import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { EntryComponent } from './entry/entry.component';
import { TableComponent } from './pages/table/table.component';


const routes: Routes = [
  { path: '', redirectTo: '/entry', pathMatch: 'full'},
  { path: 'entry', component: EntryComponent },
  { path: 'table', component: TableComponent }

  // Here we can create a separate module for the loading of the application lazy.
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
