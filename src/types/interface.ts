export interface Bundle {
    id: number;
    title: string;
    description: string;
    apps?: App[];
}

export interface App {
    id: number;
    app_name: string;
    name: string;
    logo: string;
    description: string;
    screenshot: string;
}

interface Admin {
    username: string;
    fullname: string;
}

export interface AdminsResponse {
    users: Admin[];
}

export interface DomainResponse {
    domains: string[];
    main: string;
}
