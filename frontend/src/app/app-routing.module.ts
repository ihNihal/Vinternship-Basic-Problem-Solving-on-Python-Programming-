import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddTutorialComponent} from "./components/add-tutorial/add-tutorial.component";
import {Query1Component} from "./components/query1/query1.component";
import {Query2Component} from "./components/query2/query2.component";
import {Query3Component} from "./components/query3/query3.component";
import { Query4Component } from './components/query4/query4.component';
import { Query5Component } from './components/query5/query5.component';
import { Query6Component } from './components/query6/query6.component';
import { Query7Component } from './components/query7/query7.component';
import { Query8Component } from './components/query8/query8.component';
import { Query9Component } from './components/query9/query9.component';
import { Query10Component } from './components/query10/query10.component';
import { An1aComponent } from './components/an1a/an1a.component';
import { An1bComponent } from './components/an1b/an1b.component';
import { An2aComponent } from './components/an2a/an2a.component';
import { An2bComponent } from './components/an2b/an2b.component';
import { An3aComponent } from './components/an3a/an3a.component';
import { An3bComponent } from './components/an3b/an3b.component';
import { An4aComponent } from './components/an4a/an4a.component';
import { An4bComponent } from './components/an4b/an4b.component';
import { An5aComponent } from './components/an5a/an5a.component';
import { An5bComponent } from './components/an5b/an5b.component';








const routes: Routes = [
  {path: 'first-component', component: AddTutorialComponent},
  {path: 'query1', component: Query1Component},
  {path: 'query2', component: Query2Component},
  {path: 'query3', component: Query3Component},
  {path: 'query4', component: Query4Component},
  {path: 'query5', component: Query5Component},
  {path: 'query6', component: Query6Component},
  {path: 'query7', component: Query7Component},
  {path: 'query8', component: Query8Component},
  {path: 'query9', component: Query9Component},
  {path: 'query10', component: Query10Component},
  {path: 'an1a', component: An1aComponent},
  {path: 'an1b', component: An1bComponent},
  {path: 'an2a', component: An2aComponent},
  {path: 'an2b', component: An2bComponent},
  {path: 'an3a', component: An3aComponent},
  {path: 'an3b', component: An3bComponent},
  {path: 'an4a', component: An4aComponent},
  {path: 'an4b', component: An4bComponent},
  {path: 'an5a', component: An5aComponent},
  {path: 'an5b', component: An5bComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
