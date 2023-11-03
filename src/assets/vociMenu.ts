import { Amministratore, Operatore } from "./profili";

export const VociMenu: VoceMenuType[] = [
  {
    title: "Welcome to My App",
    route: "/",
    auth: [Amministratore, Operatore]
  },
  {
    title: "Store",
    route: "/products",
    auth: [Amministratore, Operatore]
  },
  {
    title: "Abbigliamento",
    route: "/shop",
    auth: [Amministratore]
  },
  {
    title: "Carrello",
    route: "/cart",
    auth: [Amministratore, Operatore]
  }
]

export interface VoceMenuType {
  title: string;
  route: string;
  auth: string[];
  icona?: string;
}
