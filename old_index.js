// const express = require('express')
// const app = express()

// const PORT = process.env.PORT || 80

// app.get('/', (req, res) => {
//     res.end('<h1>Home Page !!</h1>')
// })

// app.listen(PORT, () => {
//     console.log('Server started!')
// })

const http = require("http");

const chalk = require("chalk");
const log = (str, color = "blue") => console.log(chalk[color](str));

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  res.end("<h1>hello !!</h1>");
});

server.listen(5050, () => log("Server has been started!"));
