import express from 'express';
import dotenv from 'dotenv';
import actions from './actions.js';

dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api', actions);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});