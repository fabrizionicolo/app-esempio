import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionDbService {

  constructor() { }

  private connection: boolean = true;

  public isConnected(): boolean {
    return this.connection;
  }

  public connect(): void {
    // effettua la connesione al db...
  }

  public disconnect(): void {
    // effettua la disconnesione dal db...
  }
}
