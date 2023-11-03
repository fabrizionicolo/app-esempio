import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DettaglioProdottoComponent } from './components/dettaglio-prodotto/dettaglio-prodotto.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListaProdottiComponent } from './components/lista-prodotti/lista-prodotti.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth-guard.service';
import { RoleGuard } from './guards/role-guard.service';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "login", component: LoginComponent},
  {
    path: "products", component: ListaProdottiComponent, canActivate: [AuthGuard], children: [
      { path: "detail/:id", component: DettaglioProdottoComponent },
    ]
  },
  { path: "cart", canActivate: [AuthGuard], loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: "shop", canActivate: [AuthGuard, RoleGuard], loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
