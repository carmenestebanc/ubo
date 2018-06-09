export class User {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    enabled: boolean;
    roles: string[];
    phone: string;
    password?: string;
    agency_id?: string;
    is_agent?: boolean;
    password_confirmation?: string;

    constructor(
        id: string, first_name: string, last_name: string, email: string,
        enabled: boolean, roles: string, phone: string, password: string, 
        password_confirmation: string, agency_id?: string, is_agent?:boolean
    )
    {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.enabled = enabled;
        this.roles = [];
        this.roles.push(roles);
        this.phone = phone;
        this.password = password;
        this.agency_id = agency_id;
        this.password_confirmation = password_confirmation;
        this.is_agent = is_agent;
    }        
}
