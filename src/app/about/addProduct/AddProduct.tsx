import axios from "axios";
import React from "react";

function AddProduct() {
  const handleAddProduct = () => {
    axios({
      url: "http://localhost:8000/results",
      method: "POST",
      data: {
        id: Math.random(),
        name: "New Film",
        overview: "This is a new film added via AddProduct component.",
      },
    });
  };
  return (
    <div>
      <button className="bg-blue-600 p-2 rounded" onClick={handleAddProduct}>
        AddProduct
      </button>
    </div>
  );
}

export default AddProduct;
