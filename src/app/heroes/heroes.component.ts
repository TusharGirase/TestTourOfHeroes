import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroDataService } from '../hero-data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroDataService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private router: Router, private dataService: HeroDataService) {

  }

  ngOnInit(): void {
    this.dataService.getHeroes().then((data) => this.heroes = data);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
