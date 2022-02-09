import Client from '../database';

export type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  url: string;
};

export class ProductStore {
  index = async (): Promise<Product[]> => {
    try {
      const conn = await Client.connect();
      const sql =
        'SELECT id, name, price, quantity, description, url FROM products ORDER BY id;';
      const results = await conn.query(sql);
      conn.release();
      return results.rows;
    } catch (err) {
      if (err instanceof Error) throw new Error(err.message);
      else throw err;
    }
  };
  create = async (product: Product): Promise<Product> => {
    try {
      const conn = await Client.connect();
      const sql =
        'INSERT INTO products(id, name, price, quantity, description, url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;';
      const results = await conn.query(sql, [
        product.id,
        product.name,
        product.price,
        product.quantity,
        product.description,
        product.url,
      ]);
      conn.release();
      const data: Product = results.rows[0];
      return data;
    } catch (err) {
      if (err instanceof Error) throw new Error(err.message);
      else throw err;
    }
  };
}
