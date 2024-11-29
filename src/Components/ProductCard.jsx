import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);
  
  const product = {
    orderID: "1234",
    productName: "Sample Product",
    price: 50, // Price per unit
    imageUrl: "src/assets/pexels-valeriya-842571.jpg", // Replace with actual image URL
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleBuy = async () => {
    const totalAmount = product.price * quantity;

    const orderData = {
      orderID: product.orderID,
      productName: product.productName,
      quantity,
      amount: totalAmount,
    };

    try {
      const response = await axios.post("http://localhost:8080/payment/order", orderData);
      console.log("Order submitted successfully:", response.data);
      window.location.href = response.data.paymentUrl
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to place order.");
    }
  };

  return (
    <div style={styles.card}>
      <img src={product.imageUrl} alt={product.productName} style={styles.image} />
      <h3>{product.productName}</h3>
      <p>Price: ${product.price}</p>
      <div style={styles.quantityContainer}>
        <button onClick={handleDecrement} style={styles.button}>
          -
        </button>
        <span style={styles.quantity}>{quantity}</span>
        <button onClick={handleIncrement} style={styles.button}>
          +
        </button>
      </div>
      <p>Total: ${product.price * quantity}</p>
      <button onClick={handleBuy} style={styles.buyButton}>
        Buy Now
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "300px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  quantityContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    margin: "16px 0",
  },
  button: {
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "8px",
    cursor: "pointer",
  },
  quantity: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  buyButton: {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 16px",
    cursor: "pointer",
  },
};

export default ProductCard;
