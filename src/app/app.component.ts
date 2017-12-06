import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
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
