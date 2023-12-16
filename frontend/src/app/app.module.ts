import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { Query1Component } from './components/query1/query1.component';
import { CommonModule } from '@angular/common';
import {NgChartsModule} from "ng2-charts";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";
import { Query2Component } from './components/query2/query2.component';
import { Query3Component } from './components/query3/query3.component';
import { Query4Component } from './components/query4/query4.component';
import { Query5Component } from './components/query5/query5.component';
import { Query6Component } from './components/query6/query6.component';
import { Query7Component } from './components/query7/query7.component';
import { Query8Component } from './components/query8/query8.component';
import { Query9Component } from './components/query9/query9.component';
import { Query10Component } from './components/query10/query10.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { An1aComponent } from './components/an1a/an1a.component';
import { An1bComponent } from './components/an1b/an1b.component';
import { An2aComponent } from './components/an2a/an2a.component';
import { An2bComponent } from './components/an2b/an2b.component';
import { An3bComponent } from './components/an3b/an3b.component';
import { An3aComponent } from './components/an3a/an3a.component';
import { An4aComponent } from './components/an4a/an4a.component';
import { An4bComponent } from './components/an4b/an4b.component';
import { An5aComponent } from './components/an5a/an5a.component';
import { An5bComponent } from './components/an5b/an5b.component';



@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    Query1Component,
    Query2Component,
    Query3Component,
    Query4Component,
    Query5Component,
    Query6Component,
    Query7Component,
    Query8Component,
    Query9Component,
    Query10Component,
    HeaderComponent,
    SideNavComponent,
    An1aComponent,
    An1bComponent,
    An2aComponent,
    An2bComponent,
    An3bComponent,
    An3aComponent,
    An4aComponent,
    An4bComponent,
    An5aComponent,
    An5bComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        NgChartsModule,
        HttpClientModule,
        ReactiveFormsModule,
        DataTablesModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
