require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor Stripe rodando!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando na porta 3000');
});
