import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/PreOrder.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PreOrder() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const bookingId = location.state?.bookingId; // Passed from CustomerHome.js

  useEffect(() => {
    fetchCategories();
    fetchMenuItems();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:9074/transc/MenuCategory");
      // const response = await axios.get(
      //   "http://localhost:8070/transc/MenuCategory"
      // );
      const data = await response.json();
      console.log(JSON.stringify(data));
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchMenuItems = async () => {
    try {
      const response = await fetch("http://localhost:9074/transc/MenuItem");
      //const response = await axios.get("http://localhost:8070/transc/MenuItem");
      const data = await response.json();
      setMenuItems(data);
    } catch (error) {
      console.error("Error fetching menu items:" + error);
    }
  };

  const handleQuantityChange = (itemId, qty) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find((item) => item.itemId === itemId);
      if (existingItem) {
        return prevOrder.map((item) =>
          item.itemId === itemId ? { ...item, qty: Number(qty) } : item
        );
      }
      return [...prevOrder, { itemId, qty: Number(qty) }];
    });
  };

  const submitOrder = async () => {
    if (!bookingId) {
      alert("Booking ID is missing!");
      return;
    }

    const orderData = {
      bId: bookingId,
      orderDetails: order.filter((item) => item.qty > 0),
    };

    try {
      const response = await fetch("http://localhost:9074/transc/Order", {
        //const response = await fetch("http://localhost:8070/transc/Order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) throw new Error("Order submission failed");
      alert("Order placed successfully!");
      //navigate("/success");
      const responseData = await response.json(); // Get the response data
      //console.log(responseData);
      const Booking_id = responseData.bId;
      //console.log(Booking_id);
      navigate("/success", { state: { Booking_id } });
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Order submission failed. Try again.");
    }
  };

  return (
    <div className="container">
      <h2>Pre-Order Food</h2>
      {categories.map((category) => (
        <div key={category.catId}>
          <h3>{category.name}</h3>
          <ul>
            {menuItems
              .filter((item) => item.catId === category.catId)
              .map((item) => (
                <li key={item.itemId}>
                  {item.name} - ${item.price}
                  <input
                    type="number"
                    min="0"
                    defaultValue="0"
                    onChange={(e) =>
                      handleQuantityChange(item.itemId, e.target.value)
                    }
                  />
                </li>
              ))}
          </ul>
        </div>
      ))}
      <button onClick={submitOrder}>Submit Order</button>
      <h3 style={{ position: "absolute", top: "10px", right: "20px" }}>
        <Link to="/logout" className="nav-link px-3">
          Logout
        </Link>
      </h3>
    </div>
  );
}
