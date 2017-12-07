import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {

  }
  ngOnInit() {
    this.heroService.getHeroes().then(res => {this.heroes = res; });
    console.log(this.heroes);
  }
  onSelect(hero) {
    console.log(hero);
    this.selectedHero = hero;
  }

}
