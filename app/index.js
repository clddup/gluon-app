import * as Gluon from '@gluon-framework/gluon';
import { writeFile } from 'fs/promises';

(async () => {
  const addr = process.env.NODE_ENV == 'development' ? 'http://127.0.0.1:5173' : 'index.html'
  const Window = await Gluon.open(addr, {
    windowSize: [ 800, 500 ],
    allowHTTP: true
  });

  Window.ipc.store.config = {
    env: 'production'
  };
  
  let log = '';
  Window.ipc.log = msg => { // Log data to a log file on disk
    log += msg;
    writeFile('app.log', log); // Write to log file
  };
})();