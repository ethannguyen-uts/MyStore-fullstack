import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { productRoutes } from './handlers/product';
import cors from 'cors';

const app: express.Application = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;
const address = process.env.ORIGIN || `localhost:${port}`;

productRoutes(app);

app.get('/', (req: Request, res: Response) => {
  res.json(process.env.ORGIN);
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${address}`);
});

export default app;
