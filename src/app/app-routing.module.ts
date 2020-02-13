import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { PageComponent } from './page/page/page.component';
import { ActiveGuard } from './active.guard';


const routes: Routes = [{path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
{path:'page',component:PageComponent,canActivate:[ActiveGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
