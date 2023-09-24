import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";

const AddProductPopUp = (props) => {
  const [newProduct, setNewProduct] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };
  const handleAddClick = () => {
    props.onAdd(newProduct);
    setNewProduct({});
  };

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>Add New Product</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="image"
          label="Image"
          fullWidth
          onChange={handleInputChange}
          value={newProduct.image || ""}
        />
        <TextField
          margin="dense"
          name="title"
          label="Title"
          fullWidth
          onChange={handleInputChange}
          value={newProduct.title || ""}
        />
        <TextField
          margin="dense"
          name="price"
          label="Price"
          fullWidth
          type="number"
          onChange={handleInputChange}
          value={newProduct.price || ""}
        />
        <TextField
          margin="dense"
          name="description"
          label="Description"
          fullWidth
          onChange={handleInputChange}
          value={newProduct.discription || ""}
        />
        <Button variant="contained" onClick={handleAddClick}>
          Add
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductPopUp;
