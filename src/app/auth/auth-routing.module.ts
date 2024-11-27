import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './Pages/layout-page/layout-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';

//localhost;4200/auth
const routes : Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children:[
      {path: 'login', component:LoginPageComponent },
      {path: 'new-account', component:RegisterPageComponent },
      {path: '**', redirectTo:'login' },
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class AuthRoutingModule { }
