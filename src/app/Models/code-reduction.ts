import {User} from './user';

export class CodeReduction {
  id: number;
  code: string;
  created_at: Date;
  date_expiration: string;
  deleted_at: Date;
  statut: boolean;
  taux_reduction: number;
  updated_at: Date;
  user_id: number;
  user: User;
}
