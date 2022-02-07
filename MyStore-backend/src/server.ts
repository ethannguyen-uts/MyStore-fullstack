import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { productRoutes } from './handlers/product';
import cors from 'cors';

const app: express.Application = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8080;

productRoutes(app);

app.get('/', (req: Request, res: Response) => {
  res.json('Welcome to API backend server for my store!');
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

export default app;
