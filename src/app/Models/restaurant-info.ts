

export class RestaurantInfo {
  id: number;
  rib: number;
  address: string;
  longitude: number;
  tel: number;
  latitude: number;
  secret_key_stripe: string;
  public_key_stripe: string;
  secret_key_paypal: string;
  public_key_paypal: string;
  nom_restaurant: string;
  num_siret: string;
  num_siren: string;
  num_tva_intercommunautaire: string;
  num_tva: string;
  logo: string;
  numero_tva: string;
  user_id: number;
  prixlivraison: number;
  livraison: boolean;
  emporter: boolean;
  sur_place: boolean;
  cash: boolean;
  carte_bancaire: boolean;
  payal: boolean;
  deleted_at: Date;
  created_at: Date;
  updated_at: Date;
}
