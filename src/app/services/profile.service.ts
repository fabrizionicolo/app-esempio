import { Inject, Injectable } from '@angular/core';
import { profili } from '../../assets/profili';
import { Profilo } from '../models/Profilo.model';

@Injectable()
export class ProfileService {

  constructor(@Inject("connection") private connection: boolean) { }

  private profilo: Profilo = {
    username: "",
    ruolo: ""
  };

  public checkProfile(username: string, password: string): boolean {
    console.log("CONNECTION: " + this.connection);
    let profilo = profili.find(x => x.username === username && x.password === password);
    return (profilo) ? true : false;
  }

  public setProfilo(username: string): void {
    let p = profili.find(x => x.username === username);
    if (p) {
      this.profilo.username = p.username;
      this.profilo.ruolo = p.ruolo;
    } else {
      console.log("Profilo non trovato");
    }
  }

  public resetProfilo(): void {
    this.profilo = {
      username: "",
      ruolo: ""
    };
  }

  public getRuolo(): string {
    return this.profilo.ruolo;
  }

  public getProfilo(): Profilo {
    return this.profilo;
  }
}

