import express from 'express';


const app = express();
app.use(express.json());

app.listen(3333).on('listening', () => {
  console.log('Running in port 3333');
});
