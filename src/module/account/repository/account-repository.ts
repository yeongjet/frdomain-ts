import { Account as AccountModel } from '@shared/model'
import { AccountRepositoryInterface } from '../definition/repository'
import { Account } from '../entity'

export class AccountRepository implements AccountRepositoryInterface {
    async getById(accountId: number): Promise<Account> {
        const account = await AccountModel.findOne({ where: { accountId } })
        return account
    }
}
