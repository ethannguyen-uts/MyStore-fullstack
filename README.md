# My Store

[![CircleCI](https://circleci.com/gh/ethannguyen-uts/MyStore-fullstack/tree/main.svg?style=shield)](https://circleci.com/gh/ethannguyen-uts/MyStore-fullstack/tree/main)

## About

• The project is a full-stack e-commerce website that provides an online shopping experience. Users can view a list of available products to purchase, modify their shopping cart, and complete the checkout process. <br>
• The application was hosted on AWS Cloud Service (AWS Elastic Beanstalk, AWS S3, AWS RDS) that satisfy the CI/CD using CircleCI pipeline:

1. Backend API (Node): <a href="http://myapp-prod-env.eba-jm5ipfid.us-west-2.elasticbeanstalk.com">http://myapp-prod-env.eba-jm5ipfid.us-west-2.elasticbeanstalk.com</a>
2. Front end (Angular): <a href="http://mystore-frontend-bucket.s3-website-us-west-2.amazonaws.com">http://mystore-frontend-bucket.s3-website-us-west-2.amazonaws.com</a>

• Tech stack:

1. Frontend: AngularJS, Karma.
2. Backend: Node, Express, TypeScript, JSON web token, Postgres.
3. Deployment: AWS CLI, EB CLI, AWS S3, AWS RDS, AWS Elastic Beanstalk, CircleCI.

For more details, please refer to [docs](./docs) folder.
