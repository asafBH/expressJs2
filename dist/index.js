"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable: no-console
const app_1 = require("./app");
const loadData_1 = require("./loadData");
const port = '3000';
app_1.app.set('port', 3000);
const server = app_1.app.listen(app_1.app.get('port'), () => {
    console.log(' App is running at http://localhost:%d in %s mode', app_1.app.get('port'), app_1.app.get('env'));
    console.log(' Press CTRL-C to stop\n');
    loadData_1.loadcategoriesJsonFile(port);
});
//# sourceMappingURL=index.js.map