import { Request, Response, NextFunction } from 'express';
import joi from 'joi';

export const genericValidator = (schema: any, bodyOrParams: 'body' | 'params') => {
    return (req: Request, res: Response, next: NextFunction) => {
        const objToValidate = req[bodyOrParams];
        const result = joi.validate(objToValidate, schema);

        if (result.error !== null) {
            next(result.error);
        }

        next();
    }
}