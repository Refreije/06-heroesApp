import { observable } from './../../../../node_modules/rxjs/src/internal/symbol/observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from '../../../environments/envirnments';
import { query } from '@angular/animations';


@Injectable({providedIn: 'root'})
export class HeroesService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environments.baseUrl;

  getheroes(): Observable<Hero[]>
  {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`)
  }

  getHeroById(id: string): Observable<Hero|undefined>
  {
    return  this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
    .pipe(
      catchError( error =>  of(undefined))
    )//El of crea un observable con el valor que hay en los parentesis. O sea crea un observable que devuelve undefined
  }

  getSuggestions(query: string): Observable<Hero[]>{


    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);
  }

  addHero(hero: Hero): Observable<Hero> {

    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    if(!hero.id) throw Error('hero id is requiered')
    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
  }

  deleteHeroById(id: string): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/heroes/${id}`)
    .pipe(
      catchError( err => of(false)),
      map( resp => true)
    );
  }


}
