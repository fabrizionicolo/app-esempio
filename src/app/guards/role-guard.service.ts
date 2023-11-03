import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Amministratore } from '../../assets/profili';
import { ProfileService } from '../services/profile.service';

@Injectable({
  providedIn: 'root'
})
class RoleGuardService {

  constructor(private profileService: ProfileService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.profileService.getRuolo() === Amministratore)
      return true;

    this.router.navigate(["/products"]);
    return false;
  }
}

export const RoleGuard: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return inject(RoleGuardService).canActivate(route, state);
    };
