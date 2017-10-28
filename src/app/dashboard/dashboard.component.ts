import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroDataService } from '../hero-data-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];

  constructor(private dataService: HeroDataService) { }


  ngOnInit() {
    this.dataService.getHeroes().then((data) => this.heroes = data.slice(1, 5));
  }

}
