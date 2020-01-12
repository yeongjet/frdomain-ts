import { Account } from '../entity'

export interface Open {
    no: string
    name: string
    openAt?: Date
}

export interface Close {
    account: Account
    closeAt?: Date
}
export interface Debit {
    account: Account
    amount: number
}
export interface Crebit {
    account: Account
    amount: number
}
export interface GetBalance {
    account: Account
}
export interface Transfer {
    from: Account
    to: Account
    amount: number
}
