import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit {

public hero?: Hero;
  // activatedRoute: ActivatedRoute en el constructor permite recoger los parametros que recibe la ruta. en este caso el id
  constructor(private heroeService :HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,//Lo necesitamos para sacar al usuario mediante codigo typescript de la pagina
  ){}


  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(500), // es para que se vea el loading, obviamente hay que quitarlo en prod
        switchMap( ({id}) => this.heroeService.getHeroById(id))//Este id es una desestructuracion, en realidad es params.id o algo asi
      ).subscribe( hero => {
        if(!hero) return this.router.navigate(['/heroes/list']);
        this.hero = hero;
        return;//no todos los patsh regresan un valor, pos le pongo retunr y ale
      })
  }


  goBack(): void {
    this.router.navigateByUrl('heroes/list')
  }


}
