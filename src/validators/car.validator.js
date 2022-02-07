import Joi, {string} from 'joi';

const CarValidator = Joi.object({
    model: string().regex(new RegExp('^[[a-zA-ZA-яёЁіІїЇ]{1,15}$')).required().messages({
        "string.empty": '"model" не може бути пустим',
        "string.pattern.base": "Тільки букви мін 1 макс 20"
    }),
    price: Joi.number().min(0).max(3000000).messages({
        'number.base': "Ціна може бути від 1 - 1 000 000",
        'number.min': "Ціна має бути більша або рівна 0",
        'number.max': "Ціна має бути не більша 1 000 000"
    }),
    year: Joi.number().min(1970).max(new Date().getFullYear()).required().messages({
        'number.base': "Ціна може бути від 1 - 1 000 000",
        'number.min': "Ціна має бути більша або рівна 0",
        'number.max': "Ціна має бути не більша 1 000 000"
    }),})

export default CarValidator;
