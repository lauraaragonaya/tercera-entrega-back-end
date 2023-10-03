//import { Express } from "express";

const express = require('express');
const ProductManager = require('../productManager.js'); 

const app = express();
const port = 3000; 

const productManager = new ProductManager('../productos.json');


app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
