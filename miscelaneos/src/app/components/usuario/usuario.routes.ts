import { Routes } from "@angular/router";
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioEdtitarComponent } from './usuario-edtitar.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';


export const USUARIO_ROUTES: Routes = [
    { path:'nuevo', component: UsuarioNuevoComponent },
    { path:'detalles', component: UsuarioDetalleComponent },
    { path:'editar', component: UsuarioEdtitarComponent },
    { path:'**', pathMatch: 'full', redirectTo: 'editar' }
];
