import React, { useState } from "react";
import { Typography, Button, Grid, Select, MenuItem } from "@mui/material";

import ProductCard from "./ProductCard";

const HomePage = (props) => {
  const [sortOrder, setSortOrder] = useState("lowToHigh");

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    props.onSort(event.target.value);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" gutterBottom>
          RetailRise
        </Typography>
        <div>
          <Button variant="contained" onClick={props.onAdd}>
            Add Product
          </Button>

          <Select
            value={sortOrder}
            onChange={handleSortChange}
            style={{ marginLeft: "10px" }}
          >
            <MenuItem value="lowToHigh">Low to High Price</MenuItem>
            <MenuItem value="highToLow">High to Low Price</MenuItem>
          </Select>
        </div>
      </div>
      <Grid container spacing={3} style={{ marginTop: "5px" }}>
        {props.products.map((product) => (
          <Grid item xs={4} key={product.id}>
            <ProductCard
              product={product}
              onDelete={props.onDelete}
              onView={props.onView}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
