import { ProductStore } from '../../models/product';
import Client from '../../database';

const store = new ProductStore();

const resetData = async () => {
  const conn = await Client.connect();
  let sql = 'DELETE FROM products;';
  await conn.query(sql);
  //Reset the sequences
  sql = 'ALTER SEQUENCE products_id_seq RESTART WITH 1;';
  await conn.query(sql);
  conn.release();
};

describe('Testing product model', () => {
  beforeAll(async () => {
    await resetData();
  });
  afterAll(async () => {
    await resetData();
  });

  it('should create a product', async () => {
    const result = await store.create({
      id: 1,
      name: 'shirt',
      price: 10.53,
      quantity: 1,
      description: 'New t shirt',
      url: '',
    });
    expect(result).toEqual({
      id: 1,
      name: 'shirt',
      price: 10.53,
      quantity: 1,
      description: 'New t shirt',
      url: '',
    });
  });

  it('should result a list of product', async () => {
    const data = await store.index();
    expect(data).toEqual([
      {
        id: 1,
        name: 'shirt',
        price: 10.53,
        quantity: 1,
        description: 'New t shirt',
        url: '',
      },
    ]);
  });
});
