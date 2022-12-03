import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./routed/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'me',
    loadChildren: () => import('./routed/me/me.module').then((m) => m.MeModule),
  },
  {
    path: '',
    loadChildren: () => import('./routed/public/public.module').then((m) => m.PublicModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
