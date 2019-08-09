import joi from 'joi';

export const schemaIdCheck = joi.object().keys({
    id: joi.string().length(36)
})

const nameMinNumOfChars = 3;
 export const nameSchema = joi.object().keys({
   name: joi.string().min(nameMinNumOfChars).required()
});

export const productSchema = joi.object().keys({
    name: joi.string().min(nameMinNumOfChars).required(),
    catagoryId : joi.string().length(36),
    itemInStock : joi.number().required()
})