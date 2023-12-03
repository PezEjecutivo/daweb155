// Importamos nuestro framework expresss
const express = require("express");

// Inicializamos express
const app = express();

// Definimos middleware
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views"));

// Definimos constantes del sistema
const port = 8080;
const currentDir = __dirname;

// Definimos las rutas
app.get("/only-text", (req, res) => {
  res.send("Hello world!");
});

app.get("/", (req, res) => {
  res.sendFile(`${currentDir}/views/index.html`);
});

app.get("/render", (req, res) => {
  const mensaje = "ok PabVal";
  const variables = { mensaje };

  res.render(`${currentDir}/views/render.ejs`, variables);
});

app.get("/api", (req, res) => {
  const myMessage = md5("ok PabVal");
  res.send({ message: myMessage });
});

// Lanzamos el servidor
app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

const md5 = require('md5')

var password = 'PabVal'

console.log('Normal : ', password)
console.log('Hashed : ', md5(password))
