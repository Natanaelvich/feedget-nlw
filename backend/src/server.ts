import express from 'express';
import { routes } from './routes';
import cors from 'cors'
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger/swagger_output.json';

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.get("/swagger.json", (_, res) => res.json(swaggerFile));

app.use(routes);

app.listen(3333).on('listening', () => {
  console.log('Running in port 3333');
});
