import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

it('create product endpoint, expect sucess', async () => {
  const product = {
    id: 41,
    name: 'test 41',
    price: 10.52,
    quantity: 1,
    description: 'product test 41',
    url: '',
  };
  const response = await request.post('/products/41').send(product);
  expect(response.status).toBe(200);
});

it('index product endpoint, expect sucess', async () => {
  const response = await request.get('/products');
  expect(response.status).toBe(200);
  expect(response.body).toEqual([
    {
      id: 41,
      name: 'test 41',
      price: 10.52,
      quantity: 1,
      description: 'product test 41',
      url: '',
    },
  ]);
});
