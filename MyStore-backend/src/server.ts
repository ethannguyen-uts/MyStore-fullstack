import express from 'express';
import bodyParser from 'body-parser';
import { productRoutes } from './handlers/product';
import cors from 'cors';

const app: express.Application = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3000;
const address = `0.0.0.0:${port}`;

productRoutes(app);

app.listen(port, () => {
  console.log(`Server is listening on port: ${address}`);
});

export default app;
