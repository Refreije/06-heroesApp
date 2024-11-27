import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
{
  path:'auth',
  loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)

},
{
  path:'heroes',
  loadChildren:() => import('./heroes/heroes.module').then(m => m.HeroesModule)

},
{
  path:'404',
  component: Error404PageComponent,

},
{//Segun fernando parece que en todos los paths entre cada caracter hay un string vacio por eso ponemos pathmach= full
  path:'',
  redirectTo:'heroes',
  pathMatch:'full'

},
{
  path:'**',
  redirectTo:'404',
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
