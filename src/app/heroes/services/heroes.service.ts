import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from '../../../environments/envirnments';


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


}
