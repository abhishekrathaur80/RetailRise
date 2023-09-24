import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Card, CardMedia, Grid } from "@mui/material";
const PageInfo = (props) => {
  if (!props.product) {
    return null;
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Typography variant="h4">RetailRise</Typography>
        <Link to="/">
          <Button variant="contained">Back</Button>
        </Link>
      </div>

      <Grid container spacing={2} style={{ marginTop: "30px" }}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia
              component="img"
              alt={props.product.title}
              height="400"
              image={props.product.image}
              title={props.product.title}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">{props.product.title}</Typography>
          <Typography variant="body1">${props.product.price}</Typography>
          <Typography variant="body2">{props.product.description}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default PageInfo;
