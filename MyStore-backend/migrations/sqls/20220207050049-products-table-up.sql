CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(77),
    price NUMERIC(16,2),
    quantity BIGINT,
    description VARCHAR(177),
    url VARCHAR(177)
);
