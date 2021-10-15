import {Custom} from './custom';
import {Image} from './image';
import {Modificateur} from './modificateur';

export class Plat {
  categorie_id: number;
  description: string;
  id: number;
  nom: string;
  prix: number;
  statut: boolean;
  customs: Custom[];
  modificateurs: Modificateur[];
  image: string;
}
