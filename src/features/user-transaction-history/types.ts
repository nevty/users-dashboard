import { TRANSACTION_OPERATION } from "./consts";

export interface Transaction {
    id:          string;
    amount:      number;
    currency:    string;
    status:      string;
    type:        TransactionOperation;
    createdAt:  string;
}

type TransactionOperation = keyof typeof TRANSACTION_OPERATION