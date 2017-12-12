import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
     this.route.paramMap
       .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
       .subscribe(hero => this.hero = hero);
}
  update(hero) {
    this.heroService.put(hero).then( res => alert('修改成功') );
  }
  goBack(): void {
    this.location.back();
  }
}
