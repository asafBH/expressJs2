"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logMiddleware(req, res, next) {
    // tslint:disable-next-line: no-console
    console.log('Time:', Date.now());
    next();
}
exports.logMiddleware = logMiddleware;
//# sourceMappingURL=log.js.map