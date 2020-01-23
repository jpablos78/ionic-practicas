import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) 
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cambio-clave',
    loadChildren: () => import('./cambio-clave/cambio-clave.module').then( m => m.CambioClavePageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'mantenimiento-perfil',
    loadChildren: () => import('./mantenimiento-perfil/mantenimiento-perfil.module').then( m => m.MantenimientoPerfilPageModule)
  },
  {
    path: 'mantenimiento-usuarios',
    loadChildren: () => import('./mantenimiento-usuarios/mantenimiento-usuarios.module').then( m => m.MantenimientoUsuariosPageModule)
  },
  {
    path: 'permisos',
    loadChildren: () => import('./permisos/permisos.module').then( m => m.PermisosPageModule)
  },
  {
    path: 'ambiente',
    loadChildren: () => import('./ambiente/ambiente.module').then( m => m.AmbientePageModule)
  },
  {
    path: 'parametros-fe',
    loadChildren: () => import('./parametros-fe/parametros-fe.module').then( m => m.ParametrosFePageModule)
  },
  {
    path: 'procesar-documentos-electronicos',
    loadChildren: () => import('./procesar-documentos-electronicos/procesar-documentos-electronicos.module').then( m => m.ProcesarDocumentosElectronicosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
