import {Ingredient} from './ingredient';
import {Plat} from './plat';

export class Modificateur {
  id: number;
  nom: string;
  prix: number;
  limite: number;
  ingredients: Ingredient[];
  plats: Plat[];
}
