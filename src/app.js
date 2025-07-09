const express = require('express');
const cors = require('cors');
const connectDatabase = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
connectDatabase();  

app.use(cors());  
app.use(express.json());  

app.use('/api/tasks', taskRoutes);  
module.exports = app;
