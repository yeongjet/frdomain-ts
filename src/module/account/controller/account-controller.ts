import { Response } from 'express'
import { AccountService } from '../service'
import * as DTO from '../dto/account-service'

export class AccountController {
    service: AccountService

    constructor(service: AccountService) {
        this.service = service
    }

    open(body: DTO.Open, res: Response) {
        const result = this.service.open(body.no, body.name, body.openAt)
        res.json(result)
    }
}
