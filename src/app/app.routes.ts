import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibroComponent } from './pages/libro/libro.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { DeportesComponent } from './pages/deportes/deportes.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path: 'libro',
        component: LibroComponent
    },
    {
        path: 'producto',
        component: ProductoComponent
    },
    {
        path: 'acerca',
        component: AcercaComponent
    },
    {
        path: 'deportes',
        component: DeportesComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    },
];
