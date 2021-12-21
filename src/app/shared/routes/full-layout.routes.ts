import { Routes } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule)
    },

    // {
    //     path: 'programa-academico',
    //     loadChildren: () => import('../../dashboard/programa-academico/programa.academicocomponent').then(m => m.ProgramaComponent)

    // },
    // {
    //     path: 'proceso',
    //     loadChildren: () => import('../../dashboard/proceso/proceso.component').then(m => m.ProcesoComponent)

    // },
    {
        path: 'usuario',
        loadChildren: () => import('../../usuario/usuario.module').then(m => m.UsuarioModule)

    },
];