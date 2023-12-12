export interface User {
    id:           string;
    email:        string;
    name:         string;
    role:         string;
    subscription: Subscription;
}

export interface Subscription {
    id:                string;
    plan_id:           string;
    user_id:           string;
    tokens:            number;
    additional_tokens: number;
    created_at:        string;
    plan:              Plan;
}

export interface Plan {
    id:       string;
    type:     string;
    price:    number;
    currency: string;
    tokens:   number;
}
