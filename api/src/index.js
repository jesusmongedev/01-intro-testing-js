import { config } from './config';
import express from 'express';
import cors from 'cors';
import routerApi from './routes';

const createApp = () =>
{
  const app = express();
  app.use( cors() );
  app.use( express.json() );

  app.get( '/', ( req, res ) =>
  {
    res.send( 'Hello World, Learning testing at Platzi is awesome!' );
  } );

  routerApi( app );
  return app;
};

const app = createApp();

app.listen(config.port, (err) => {
  console.log(`Listening http://localhost:${config.port}`)
  if (err) {
    console.error('Error: ', err);
  }
});
