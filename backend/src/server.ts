import express from 'express';
import { routes } from './routes';


const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333).on('listening', () => {
  console.log('Running in port 3333');
});
