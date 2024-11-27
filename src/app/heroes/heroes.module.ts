import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './Pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './Pages/layout-page/layout-page.component';
import { ListPageComponent } from './Pages/list-page/list-page.component';
import { NewPageComponent } from './Pages/new-page/new-page.component';
import { SearchPageComponent } from './Pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    CardComponent,

    //Pipes
    HeroImagePipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule //Es para usar el autocompletado (select2)
  ]
})
export class HeroesModule { }
