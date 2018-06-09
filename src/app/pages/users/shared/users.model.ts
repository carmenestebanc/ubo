export class Users {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password?: string;
  roles: string[];
  enabled: boolean;
  password_confirmation?: string;
  updated_by: string;
  created_by: number;
  deleted_at: string;
  agency_id?: string;
  id?: string;
}
