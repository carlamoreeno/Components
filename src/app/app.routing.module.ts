import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { HeroisComponent } from './pages/herois/herois.component';
import { ViloesComponent } from './pages/viloes/viloes.component';
import { IdentidadessecretasComponent } from './pages/identidadessecretas/identidadessecretas.component';

const appRoutes: Routes = [
  { path: 'herois', component: HeroisComponent },
  { path: '', redirectTo: '/herois', pathMatch: 'full' },
  { path: 'viloes', component: ViloesComponent },
  { path: 'identidadessecretas', component: IdentidadessecretasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
