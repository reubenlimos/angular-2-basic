import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../hero';

@Component({
  selector: 'hero-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  @Input()
  hero: Hero;
  constructor(
    private heroService: HeroesService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }
}
