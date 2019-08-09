import { Request, Response, NextFunction } from 'express';

export function logErrors(err: Error, req: Request, res: Response, next: NextFunction) {
  // tslint:disable-next-line: no-console
  console.log('THIS IS A Log Error');
  // tslint:disable-next-line: no-console
  console.error(err.stack);
  next(err);
}

export function clientErrorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (!req.xhr) {
    return res.status(500).send({ error: 'Something failed!' });
  }
  next(err);
}

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  res.status(500);
  res.render('error', { error: err });
}

//generic validation handler
export function genericValidatorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err.name === "ValidationError") {
    return res.status(400).send({ error: err.message });
  }

  next(err);
}
