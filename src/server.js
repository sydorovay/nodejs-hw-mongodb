const express = require('express');
const cors = require('cors');
const pino = require('pino')();

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.status(404).json({ message: 'Not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  pino.info(`Server is running on port ${PORT}`);
});