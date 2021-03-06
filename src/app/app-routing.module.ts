import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module')
          .then(m => m.HomeModule),
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module')
          .then(m => m.ProductsModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module')
          .then(m => m.ContactModule),
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module')
          .then(m => m.OrderModule),
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule),
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
