const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.REST_PORT || 5001;

mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log("DATABASE CONNECTED"))
.catch(err => console.log(err))

app.listen(PORT, () => console.log("SERVER CONNECTED"));