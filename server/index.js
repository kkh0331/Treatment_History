const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: 'http://localhost:3000'}));
app.use(express.json()); // JSON 형식의 요청 바디를 파싱
app.use(express.urlencoded({ extended: false })); // URL-encoded 형식의 요청 바디를 파싱

const port = process.env.PORT || 8000;
app.listen(port);

const treatment = require('./treatment');
app.use('/treatment' ,treatment);

console.log(`server running at http ${port}`);
