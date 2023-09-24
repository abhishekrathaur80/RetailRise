import React, { useState, useEffect } from "react";
import { CssBaseline, Container } from "@mui/material";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import AddProductPopUp from "./components/AddProductPopUp";
import HomePage from "./components/HomePage";
import PageInfo from "./components/PageInfo";

function App() {
  const [products, setProducts] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const sortProducts = (order) => {
    const sortedProducts = [...products];
    if (order === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setOpenPopup(false);
  };
  const onViewProduct = (product) => {
    setSelectedProduct(product);
  };
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Switch>
          <Route path="/" exact>
            <HomePage
              products={products}
              onDelete={deleteProduct}
              onSort={sortProducts}
              onAdd={() => setOpenPopup(true)}
              onView={onViewProduct}
            />
          </Route>
          <Route path="/product/:id">
            {selectedProduct ? (
              <PageInfo product={selectedProduct} />
            ) : (
              <div>Loading...</div>
            )}
          </Route>
        </Switch>
        <AddProductPopUp
          open={openPopup}
          onClose={() => setOpenPopup(false)}
          onAdd={addProduct}
        />
      </Container>
    </div>
  );
}

export default App;
