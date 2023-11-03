import { Injectable } from '@angular/core';
import { AppModule } from '../app.module';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: "root"
})
export class AuthService {

  constructor(private profileService: ProfileService) { }

  private isLogged: boolean = false;
  
  public loggin(user: { username: string, password: string }): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let check = this.profileService.checkProfile(user.username, user.password);
      if (check) {
        this.isLogged = true;
        resolve(true);
      } else {
        this.isLogged = false;
        resolve(false);
      }
    })
  }

  public loggout(): void {
    this.isLogged = false;
    this.profileService.resetProfilo();
  }

  public isLoggin(): boolean {
    return this.isLogged;
  }
}
