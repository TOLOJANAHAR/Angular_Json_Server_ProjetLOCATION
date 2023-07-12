import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { TableauComponent } from './tableau/tableau.component';

const routes: Routes = [
  { path : "page", component: PageComponent},
  { path : "tableau", component: TableauComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
