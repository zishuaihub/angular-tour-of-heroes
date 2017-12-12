import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {HeroService} from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes;
  selectedHero: Hero;
  constructor(private heroService: HeroService, private router: Router) {

  }
  ngOnInit() {
    this.heroService.getHeroes().then(res => {this.heroes = res; });
    console.log(this.heroes);
  }
  onSelect(hero) {
    console.log(hero);
    this.selectedHero = hero;
  }
  gotoDetail(hero) {
    this.router.navigate(['/detail', hero.id]);
  }
  add(name) {
    name = name.trim();
    if (name) {
      this.heroService.create(name).then(res => (alert('已添加')));
    }else {
      return;
    }
  }
  delete(hero) {
    event.stopPropagation();
    this.heroService.delete(hero).then(
      () => this.heroes = this.heroes.filter(h => h !== hero));
      if (this.selectedHero === hero) { this.selectedHero = null; }
  }

}
