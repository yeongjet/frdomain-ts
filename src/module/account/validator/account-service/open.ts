import Joi from '@hapi/joi'

const openSchema = Joi.object({
    no: Joi.string().min(1),
    name: Joi.string().min(1)
})

type openType = {
    no: string
    name: string
}

export const openValid = (n: openType) => openSchema.validate(n)
