import {User} from './user';

export class Reduction {
  id: number;
  code: string;
  taux_reduction: number;
  statut: boolean;
  user_id: number;
  user: User;
  date_expiration: string;
}
