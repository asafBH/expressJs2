"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logErrors(err, req, res, next) {
    // tslint:disable-next-line: no-console
    console.log('THIS IS A Log Error');
    // tslint:disable-next-line: no-console
    console.error(err.stack);
    next(err);
}
exports.logErrors = logErrors;
function clientErrorHandler(err, req, res, next) {
    if (!req.xhr) {
        return res.status(500).send({ error: 'Something failed!' });
    }
    next(err);
}
exports.clientErrorHandler = clientErrorHandler;
function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', { error: err });
}
exports.errorHandler = errorHandler;
//generic validation handler
function genericValidatorHandler(err, req, res, next) {
    if (err.name === "ValidationError") {
        return res.status(400).send({ error: err.message });
    }
    next(err);
}
exports.genericValidatorHandler = genericValidatorHandler;
//# sourceMappingURL=error.js.map