import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class HeroService {
  private heroesUrl = 'http://localhost:3000/heroes';
  constructor( private http: HttpClient) {}
  getHeroes() {
   return this.http.get(this.heroesUrl, {}).toPromise();
  }
  getHero(id: number) {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url).toPromise().then(res => res);
  }
  put(hero) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), {headers}).toPromise();
  }
  create(name) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return  this.http.post(
      this.heroesUrl, JSON.stringify({name: name}), {headers})
      .toPromise().then();
  }
  delete(hero) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = `${this.heroesUrl}/${hero.id}`;
    return  this.http.delete(
      url, {headers})
      .toPromise();
  }
}
