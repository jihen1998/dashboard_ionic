import {Commande} from './commande';

export class Userswithhistoric {
  banned_at: string;
  commandes: Commande[];
  created_at: string;
  date_de_naissance: string;
  deleted_at: string;
  email: string;
  email_verified_at: string;
  id: number;
  image: string;
  is_connected: boolean;
  is_verified: boolean;
  nom: string;
  nomimage: string;
  number_of_ban: number;
  numero_de_telephone: number;
  premium: boolean;
  prenom: string;
  updated_at: string;
  verification_code: string;
}
