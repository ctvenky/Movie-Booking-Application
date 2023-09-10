const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json()); 

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Upgrad Movie booking application development.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const userRoutes = require('./routes/user.routes');
app.use('/api', userRoutes);
