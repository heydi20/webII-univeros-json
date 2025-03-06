import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivadoComponent } from './pages/privado/privado.component';
import { LoginComponent } from './pages/login/login.component';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'privado',
        component:PrivadoComponent,canActivate:[loginGuard]
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },

];
