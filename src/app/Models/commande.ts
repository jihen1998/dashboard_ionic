import {Plat} from './plat';
import {User} from './user';
import {Modificateur} from './modificateur';
import {Offre} from './offre';
import {CustomOffres} from './custom-offres';

export class Commande {
  id: number;
  code_reduction_id: string;
  commande_id: string;
  created_at: string;
  date_paiement: string;
  date_traitement: string;
  deleted_at: string;
  latitude: number;
  livraison: string;
  longitude: number;
  user: User;
  status: string;
  user_id: number;
  requested_plat: Plat[];
  livraison_address: string;
  custom_offres: CustomOffres[];
  prix_total: number;
  paiement_modality: string;
}
