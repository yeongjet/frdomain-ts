import { Result } from '../result'

export class ParameterError extends Result {
    constructor(message: string) {
        super(10001, message, [])
    }
}
