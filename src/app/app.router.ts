import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LocalComponent } from './local/local.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { DashboardComponent } from './heroes/dashboard/dashboard.component';
import { HeroDetailsComponent } from './heroes/details/details.component';

export const router: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full'},
	{ path: 'home', component: HomeComponent},
	{ path: 'localstorage-page', component: LocalComponent},
	{ path: 'heroes',
	  component: HeroesComponent,
	  children: [
			{ path:'', component: DashboardComponent},
			{ path: 'hero', component: HeroComponent},
			{ path:'dashboard',
			  children:[
				{ path:'', component: DashboardComponent},
				{ path: 'detail/:id', component: HeroDetailsComponent}
			  ]
			},
			{ path: 'detail/:id', component: HeroDetailsComponent}
	  ]
	}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);