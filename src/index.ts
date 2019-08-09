 // tslint:disable: no-console
import { app } from './app';
import {loadcategoriesJsonFile} from './loadData';
const port = '3000';
app.set('port', 3000);

const server = app.listen(app.get('port'), () => {
  console.log(
    ' App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env'),
  );
  console.log(' Press CTRL-C to stop\n');

  loadcategoriesJsonFile(port);
});
