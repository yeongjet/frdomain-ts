import _ from 'lodash'
import { left, right } from 'fp-ts/lib/Either'
import {
    AccountServiceInterface,
    Response
} from '../definition/service/account-service'
import { Account, Balance } from '../entity'
import { ParameterError, RuleError } from '@shared/error'
import { Result } from '@shared/result'
import produce from 'immer'

export class AccountService implements AccountServiceInterface {

    open(no: string, name: string, openAt: Date = new Date()): Response {
        if (_.isEmpty(no) || _.isEmpty(name)) {
            return left(new ParameterError('no和name不能为空'))
        }
        return right(Result.success(new Account(no, name, openAt)))
    }
    close(account: Account, closeAt: Date = new Date()): Response {
        if (closeAt < account.openAt) {
            return left(new ParameterError('closeAt必须大于openAt'))
        }
        return right(
            Result.success(
                produce(account, n => {
                    n.closeAt = closeAt
                })
            )
        )
    }
    debit(account: Account, amount: number): Response {
        if (account.balance.amount < amount) {
            return left(new RuleError(11001, '余额不足'))
        }
        return right(
            Result.success(
                produce(account, n => {
                    n.balance.amount -= amount
                })
            )
        )
    }
    crebit(account: Account, amount: number): Response {
        return right(
            Result.success(
                produce(account, n => {
                    n.balance.amount += amount
                })
            )
        )
    }
    getBalance(account: Account): Result<Balance> {
        return Result.success(account.balance)
    }
    transfer(from: Account, to: Account, amount: number): Result<void> {
        this.debit(from, amount)
        this.crebit(to, amount)
        return Result.success()
    }
}
