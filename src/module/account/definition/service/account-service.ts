import { Account } from '../../entity'
import { Either } from 'fp-ts/lib/Either'
import { ParameterError } from '@shared/error'
import { Result } from '@shared/result'

export type Response = Either<ParameterError, Result<Account>>

export interface AccountServiceInterface {
    open: (no: string, name: string, openAt?: Date) => Response
    close: (account: Account, closeAt?: Date) => Response
    debit: (account: Account, amount: number) => Response
    crebit: (account: Account, amount: number) => Response
    getBalance: (account: Account) => Result<number>
    transfer: (from: Account, to: Account, amount: number) => Result<void>
}
