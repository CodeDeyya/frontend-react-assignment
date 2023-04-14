import * as yup from 'yup';

export const MIN_TICKETS = 1;
export const MIN_PRICE_PER_TICKET = 1;

export const ticketValidator = yup
    .object({
        email: yup.string().email().required(),
        title: yup.string().required(),
        description: yup.string().required(),
        price: yup.number().required().min(MIN_PRICE_PER_TICKET),
        amount: yup.number().required().min(MIN_TICKETS),
        supplier: yup.string().required(),
    })
    .required();

export type TicketWithoutId = yup.InferType<typeof ticketValidator>;

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
