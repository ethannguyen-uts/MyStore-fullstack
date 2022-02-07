import express, { Request, Response } from 'express';
import { Product, ProductStore } from '../models/product';

const store = new ProductStore();

const index = async (_req: Request, res: Response): Promise<void> => {
  try {
    const listProduct: Product[] = await store.index();
    res.json(listProduct);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400);
      res.send(err.message);
    } else throw err;
  }
};

const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: Product = {
      id: parseInt(req.params.id as unknown as string),
      name: req.body.name as unknown as string,
      price: req.body.price as unknown as number,
      quantity: req.body.quantity as unknown as number,
      description: req.body.description as unknown as string,
      url: req.body.url as unknown as string,
    };
    const newProduct: Product = await store.create(data);
    res.json(newProduct);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400);
      res.send(err.message);
    } else throw err;
  }
};

export const productRoutes = (app: express.Application): void => {
  app.get('/products', index);
  app.post('/products/:id', create);
};
