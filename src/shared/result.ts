export class Result<T = []> {
    code: number
    message: string
    data: T

    constructor(code: number, message: string, data: T) {
        this.code = code
        this.message = message
        this.data = data
    }

    static success<U>(value?: U): Result<U> {
        return new Result<U>(10000, 'success', value)
    }
}
