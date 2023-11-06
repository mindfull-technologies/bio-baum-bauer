import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import allowCors from './middlewares/cors.js'
import allRoutes from './routes/allRoutes.js'
import db from './db.js';

const port = process.env.PORT || 4000;
dotenv.config();

const app = express();
app.use(helmet()); //provide basic securites
allowCors(app);
app.use(express.json());
app.use(cookieParser()); // parse cookies

if (app.get('env') === 'development') {
  app.use(morgan('tiny')); // provide logging to the console
}

app.get('/', (_, res) => {
  res.send('<h1>Backend is running!!!</h1>');
});

app.use('/api', allRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}}`);
  db.connect();
});