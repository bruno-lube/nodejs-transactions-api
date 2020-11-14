# gostack-template-node-fundamentals

Simple example API that receives income and outcome transactions and generates, and outputs list of transactions and result balance account.

To use the application:
Install packages: yarn
Run: yarn dev:server

Transaction result example:
{
  "id": "uuid",
  "title": "Salary",
  "value": 3000,
  "type": "income"
}

Endpoints:

POST /transactions
Payload:
{
  "title": "Salary",
  "value": 3000,
  "type": "income"
}

GET /transactions
Expected response example:
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salary",
      "value": 4000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Freelance",
      "value": 2000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Credit Card Payment",
      "value": 4000,
      "type": "outcome"
    },
    {
      "id": "uuid",
      "title": "Gamer Chair",
      "value": 1200,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}
