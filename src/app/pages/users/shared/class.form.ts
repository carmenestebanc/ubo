export interface form {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    password?: string;
    password_confirmation?: string;
    roles: string;
    enabled: boolean;
    is_agent: boolean;
    agency_id: string;
}


