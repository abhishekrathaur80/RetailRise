import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";

const ProductCard = (props) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={props.product.title}
        height="140"
        image={props.product.image}
        title={props.product.title}
      />
      <CardContent>
        <Typography>{props.product.title}</Typography>
        <Typography>${props.product.price}</Typography>

        <Link to={`/product/${props.product.id}`}>
          <Button
            variant="outlined"
            onClick={() => props.onView(props.product)}
          >
            View
          </Button>
        </Link>
        <Button
          variant="outlined"
          onClick={() => props.onDelete(props.product.id)}
          style={{ marginLeft: "10px" }}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
