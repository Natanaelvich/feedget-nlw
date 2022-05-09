import express from 'express';
import { routes } from './routes';
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.listen(3333).on('listening', () => {
  console.log('Running in port 3333');
});
