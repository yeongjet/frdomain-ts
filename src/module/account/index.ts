import { AccountService } from './service'
import { AccountController } from './controller'

const accountService = new AccountService()

const accountController = new AccountController(accountService)

export { accountService, accountController }
