const express = require("express");
const cors = require("cors");
const products = require("./products.json");

const app = express();
app.use(cors());
app.use(express.json())
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the world of microservices");
});

app.get("/v1/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/v1/products/:id", (req, res) => {
  res
    .status(200)
    .json(products.filter((product) => product.id === parseInt(req.params.id)));
});

app.post("/v1/products", (req, res) => {
  let {
    id,
    ProductName,
    Quantity,
    ExtendedPrice,
    ShipperName,
    ShippedDate,
    Status,
  } = req.body;

  const newProduct = {
    id,
    ProductName,
    Quantity,
    ExtendedPrice,
    ShipperName,
    ShippedDate,
    Status,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
