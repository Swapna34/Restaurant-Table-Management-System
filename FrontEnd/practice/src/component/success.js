import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Success() {
  const location = useLocation();
  const bookingId = location.state?.Booking_id; // Ensure this is passed when navigating

  const [orderDetails, setOrderDetails] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (bookingId) {
      fetchOrderDetails();
      fetchMenuItems();
    }
  }, [bookingId]);

  const fetchOrderDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:9074/transc/Order/${bookingId}`
      );
      const data = await response.json();
      setOrderDetails(data.length > 0 ? data[0].orderDetails : []);
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  };

  const fetchMenuItems = async () => {
    try {
      const response = await fetch("http://localhost:9074/transc/MenuItem");
      const data = await response.json();
      setMenuItems(data);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    } finally {
      setLoading(false);
    }
  };

  const getItemName = (itemId) => {
    const item = menuItems.find((menuItem) => menuItem.itemId === itemId);
    return item ? item.name : "Unknown Item";
  };

  const getItemPrice = (itemId) => {
    const item = menuItems.find((menuItem) => menuItem.itemId === itemId);
    return item ? item.price : 0;
  };

  const calculateTotal = () => {
    let total = 0;
    orderDetails.forEach((orderItem) => {
      const price = getItemPrice(orderItem.itemId);
      total += price * orderItem.qty;
    });
    setTotalAmount(total.toFixed(2)); // Formatting the total to 2 decimal places
  };

  useEffect(() => {
    if (orderDetails.length > 0) {
      calculateTotal();
    }
  }, [orderDetails]);

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center text-success">Order Placed Successfully!</h2>
        {loading ? (
          <p className="text-center">Loading order details...</p>
        ) : (
          <div>
            <h3 className="mt-4">Order Summary</h3>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {orderDetails.map((orderItem) => (
                    <tr key={orderItem.odId}>
                      <td>{getItemName(orderItem.itemId)}</td>
                      <td>{orderItem.qty}</td>
                      <td>
                        $
                        {(
                          getItemPrice(orderItem.itemId) * orderItem.qty
                        ).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-end mt-3">
              <h4 className="fw-bold">Total: ${totalAmount}</h4>
            </div>
          </div>
        )}
      </div>
      <h3 style={{ position: "absolute", top: "10px", right: "20px" }}>
        <Link to="/logout" className="nav-link px-3">
          Logout
        </Link>
      </h3>
      <div className="text-center mt-4">
        <p className="text-muted">Thank you for dining with us!</p>
      </div>
    </div>
  );
}

// //stage 2----
// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import "../css/Success.css";

// export default function Success() {
//   const location = useLocation();
//   const bookingId = location.state?.Booking_id; // Ensure this is passed when navigating

//   const [orderDetails, setOrderDetails] = useState([]);
//   const [menuItems, setMenuItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect(() => {
//     if (bookingId) {
//       fetchOrderDetails();
//       fetchMenuItems();
//     }
//   }, [bookingId]);

//   const fetchOrderDetails = async () => {
//     try {
//       const response = await fetch(
//         `https://localhost:7133/api/Order/${bookingId}`
//       );
//       const data = await response.json();
//       setOrderDetails(data.length > 0 ? data[0].orderDetails : []);
//     } catch (error) {
//       console.error("Error fetching order details:", error);
//     }
//   };

//   const fetchMenuItems = async () => {
//     try {
//       const response = await fetch(
//         "https://localhost:7133/api/MenuItem/GetItems"
//       );
//       const data = await response.json();
//       setMenuItems(data);
//     } catch (error) {
//       console.error("Error fetching menu items:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getItemName = (itemId) => {
//     const item = menuItems.find((menuItem) => menuItem.itemId === itemId);
//     return item ? item.name : "Unknown Item";
//   };

//   const getItemPrice = (itemId) => {
//     const item = menuItems.find((menuItem) => menuItem.itemId === itemId);
//     return item ? item.price : 0;
//   };

//   const calculateTotal = () => {
//     let total = 0;
//     orderDetails.forEach((orderItem) => {
//       const price = getItemPrice(orderItem.itemId);
//       total += price * orderItem.qty;
//     });
//     setTotalAmount(total.toFixed(2)); // Formatting the total to 2 decimal places
//   };

//   useEffect(() => {
//     if (orderDetails.length > 0) {
//       calculateTotal();
//     }
//   }, [orderDetails]);

//   return (
//     <div
//       className="success-container"
//       style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
//     >
//       <h2 style={{ textAlign: "center" }}>Order Placed Successfully!</h2>
//       {loading ? (
//         <p>Loading order details...</p>
//       ) : (
//         <div>
//           <h3>Order Summary</h3>
//           <div
//             className="bill-container"
//             style={{ width: "50%", margin: "auto" }}
//           >
//             <div
//               className="bill-item"
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 padding: "10px 0",
//                 borderBottom: "1px solid #ccc",
//               }}
//             >
//               <div style={{ fontWeight: "bold" }}>Item</div>
//               <div style={{ fontWeight: "bold" }}>Qty</div>
//               <div style={{ fontWeight: "bold" }}>Price</div>
//             </div>
//             {orderDetails.map((orderItem) => (
//               <div
//                 key={orderItem.odId}
//                 className="bill-item"
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   padding: "10px 0",
//                   borderBottom: "1px solid #ccc",
//                 }}
//               >
//                 <div>{getItemName(orderItem.itemId)}</div>
//                 <div>{orderItem.qty}</div>
//                 <div>
//                   ${(getItemPrice(orderItem.itemId) * orderItem.qty).toFixed(2)}
//                 </div>
//               </div>
//             ))}
//             <div
//               className="bill-total"
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 padding: "10px 0",
//                 fontWeight: "bold",
//               }}
//             >
//               <div>Total</div>
//               <div>${totalAmount}</div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
