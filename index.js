const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/my-mern-project?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const blogsRouter = require('./routes/blogs');
app.use('/api/blogs', blogsRouter);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});