import { Result } from '../result'

export class RuleError extends Result {
    constructor(code: number, message: string) {
        super(code, message, [])
    }
}
