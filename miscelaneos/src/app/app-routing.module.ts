import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
// Importar el archivo de rutas de usuarios
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { 
    path:'usuario/:id', 
    component: UsuarioComponent,
    // carga el archivo de rutas sin llaves [] porque ya es un arreglo
    children: USUARIO_ROUTES
  },
  { path:'**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
