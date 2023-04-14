export interface TicketWithoutId {
    email: string;
    title: string;
    description: string;
    price: number;
    amount: number;
    supplier: string;
}

export interface TicketWithId extends TicketWithoutId {
    id: number;
}

export interface PostTicketsRequest {
    ticket: TicketWithoutId;
}

export interface GeneralResponse {
    message: string;
}

export interface ValidationErrorResponse {
    message: string;
    valid: boolean;
}
