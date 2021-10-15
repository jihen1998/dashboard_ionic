import {Plat} from './plat';

export class Offre {
  id: number;
  description: string;
  nom: string;
  prix: number;
  image: string;
  isDisponible: boolean;
  plats: Plat[];
}
