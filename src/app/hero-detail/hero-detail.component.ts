import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroDataService } from '../hero-data-service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private heroService: HeroDataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    let id: number;
    this.route.params.subscribe(params => id = +params['id']);
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
