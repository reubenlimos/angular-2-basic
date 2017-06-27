import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { LocalComponent } from './local/local.component';
import { HomeComponent } from './home/home.component';
import { LocalService } from './services/local.service';
import { HeroesService } from './services/heroes.service';
import { HeroSearchService } from './services/hero-search.service';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './heroes/details/details.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { DashboardComponent } from './heroes/dashboard/dashboard.component';
import { HeroSearchComponent } from './heroes/search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalComponent,
    HomeComponent,
    HeroesComponent,
    HeroDetailsComponent,
    HeroComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routes
  ],
  providers: [
    LocalService,
    HeroesService,
    HeroSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
