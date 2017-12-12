import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().then(
      res => { this.heroes = res; console.log(res); } );
  }
}
