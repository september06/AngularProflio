import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Protfolio } from './protfolio/protfolio';
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';


const routes: Routes = [
  {path:'home', component: Home},
  {path:'protfolio', component: Protfolio},
  {path:'resume', component: Resume},
  {path:'contact', component: Contact},
  {path:'home', component: Home},
   { path: '**', component: Home, pathMatch: 'full' } // Wildcard route for a 404 page or redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
