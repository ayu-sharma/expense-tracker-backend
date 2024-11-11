const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('./Models/Users');
const cors = require('cors');
const app = express();
const port = 5000;
const mongoURI = "mongodb://localhost:27017/expense-tracker";

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

mongoose.connect(mongoURI, {
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB", err);
});

// Create Expense route
app.post('/createexpense', (req, res) => {
  UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.status(400).json({ error: err.message }));
});
app.get('/', (req, res) => {
  UserModel.find()
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  UserModel.findByIdAndDelete(id).then(user => res.json(user)).catch(err => res.json(err))
})
// Start server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
