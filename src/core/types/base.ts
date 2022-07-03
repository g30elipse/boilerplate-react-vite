export interface BaseEntity {
    id: string;
    created: string;
    updated: string;
}

export interface NameValuePair<T = string> {
    name: string;
    value: T;
}

function x() {
    
}