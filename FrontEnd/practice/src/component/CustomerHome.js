import React, { useState, useEffect } from "react";
import "../css/CustomerHome.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CustomerHome() {
  const [customer, setCustomer] = useState({});
  const [bookingTime, setBookingTime] = useState(""); // Selected time
  const [tables, setTables] = useState([]); // Available tables
  const [selectedTable, setSelectedTable] = useState(null); // Table for booking confirmation
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (!loggedUser) {
      alert("User not logged in. Redirecting to login page...");
      navigate("/login");
      return;
    }

    const uid = loggedUser.uid;
    //fetch(`http://localhost:8081/getCustomer?u_id=${uid}`)
    fetch(`http://localhost:8070/auth/getCustomer?u_id=${uid}`)
      .then((resp) => resp.json())
      .then((obj) => {
        localStorage.setItem("loggedCustomer", JSON.stringify(obj));
        setCustomer(obj);
      });
  }, [navigate]);

  const customerId = customer.c_id;

  // Function to fetch available tables
  const fetchTables = async (time) => {
    if (!time) return;
    const today = new Date().toISOString().split("T")[0];
    const url = `http://localhost:8070/crud/getAvailTable?bookingDate=${today}&bookingTime=${time}`;

    try {
      const response = await fetch(url);
      //console.log(JSON.stringify(response));
      //alert(response.json());
      if (!response.ok) throw new Error("Failed to fetch tables");
      const data = await response.json();
      //+alert(data);
      setTables(data);
    } catch (error) {
      console.error("Error fetching tables:", error);
      setTables([]);
    }
  };

  // Function to handle booking confirmations
  const confirmBooking = async (tableId) => {
    const today = new Date().toISOString().split("T")[0];
    const bookingData = {
      b_date: today,
      b_time: bookingTime,
      c_id: customerId,
      t_id: tableId,
    };

    try {
      const response = await fetch("http://localhost:8070/crud/bookTable", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) throw new Error("Booking failed");
      const responseData = await response.json();

      alert("Table booked successfully!");

      //Ask user to pre-order food;
      var wantToPreOrder = window.confirm(
        "Would you like to pre-order food for your table? NOTE:Once you Pre-order food you can't cancle order..."
      );

      if (wantToPreOrder) {
        navigate("/pre-order", { state: { bookingId: responseData.b_id } });
      } else {
        navigate("/thank-you");
      }

      //setTables(tables.filter((table) => table.t_id !== tableId));
      //navigate("/pre-order", { state: { bookingId: responseData.b_id } });
    } catch (error) {
      console.error("Error booking table:", error);
      alert("Booking failed. Try again.");
    }
  };

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center bg-primary text-white p-3 rounded shadow-sm">
        <h1 className="m-0">
          Welcome, {customer.fname} {customer.lname}
        </h1>
        <Link to="/logout" className="btn btn-danger">
          Logout
        </Link>
      </div>
      {/* <div className="btn btn-primary position-fixed bottom-0 start-0 m-3">
        <button onClick={() => window.history.back()}>← Back</button>
      </div> */}

      {/* Booking Time Selection */}
      <div className="mt-4">
        <label className="form-label fw-bold">Select Booking Time:</label>
        <select
          className="form-select"
          value={bookingTime}
          onChange={(e) => {
            setBookingTime(e.target.value);
            fetchTables(e.target.value);
          }}
        >
          <option value="">-- Select Time --</option>
          <option value="11">11 AM</option>
          <option value="1">1 PM</option>
          <option value="3">3 PM</option>
          <option value="5">5 PM</option>
        </select>
      </div>

      {/* Available Tables */}
      <div className="mt-4">
        <h3>Available Tables:</h3>
        {tables.length === 0 ? (
          <div className="alert alert-warning">
            No tables available for this time slot.
          </div>
        ) : (
          <ul className="list-group">
            {tables.map((table) => (
              <li
                key={table.t_id}
                className="list-group-item d-flex justify-content-between align-items-center"
                style={{ cursor: "pointer" }}
              >
                <span>
                  <strong>Table No:</strong> {table.table_no} |
                  <strong> Capacity:</strong> {table.capacity} |
                  <strong> Time Slot:</strong> {table.b_time} hrs
                </span>
                <button
                  className="btn btn-success"
                  onClick={() => setSelectedTable(table)}
                >
                  Book
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Booking Confirmation Modal */}
      {selectedTable && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Booking</h5>
                <button
                  className="btn-close"
                  onClick={() => setSelectedTable(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Do you want to book Table {selectedTable.table_no}?</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    confirmBooking(selectedTable.t_id);
                    setSelectedTable(null);
                  }}
                >
                  Yes, Book It
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedTable(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
// //-------------------------------------------------------------------------------//
// import React, { useState, useEffect } from "react";
// import "../css/CustomerHome.css";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// export default function CustomerHome() {
//   const [customer, setCustomer] = useState({});

//   useEffect(() => {
//     const uid = JSON.parse(localStorage.getItem("loggedUser")).uid;
//     //uid=null;
//     fetch("http://localhost:8081/getCustomer?u_id=" + uid)
//       //fetch("http://localhost:7081/getCustomer?u_id=" + uid)
//       .then((resp) => resp.json())
//       .then((obj) => {
//         localStorage.setItem("loggedCustomer", JSON.stringify(obj));
//         setCustomer(obj);
//       });
//   }, []);
//   //console.log(customer);

//   const [bookingTime, setBookingTime] = useState(""); // Selected time
//   const [tables, setTables] = useState([]); // Available tables
//   const [selectedTable, setSelectedTable] = useState(null); // Table for booking confirmation
//   const customerId = customer.c_id;
//   const navigate = useNavigate();

//   // Function to fetch available tables
//   const fetchTables = async (time) => {
//     if (!time) return; // Avoid fetching if no time is selected

//     const today = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format
//     const url = `http://localhost:8082/getAvailTable?bookingDate=${today}&bookingTime=${time}`;

//     try {
//       const response = await fetch(url);
//       if (!response.ok) throw new Error("Failed to fetch tables");
//       const data = await response.json();
//       setTables(data);
//     } catch (error) {
//       console.error("Error fetching tables:", error);
//       setTables([]); // Reset tables on error
//     }
//   };

//   // Function to handle booking confirmations
//   const confirmBooking = async (tableId) => {
//     const today = new Date().toISOString().split("T")[0];
//     const bookingData = {
//       b_date: today,
//       b_time: bookingTime,
//       c_id: customerId,
//       t_id: tableId,
//     };

//     try {
//       const response = await fetch("http://localhost:8082/bookTable", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(bookingData),
//       });

//       if (!response.ok) throw new Error("Booking failed");
//       const responseData = await response.json(); // Parse response as JSON

//       alert("Table booked successfully!");

//       //Ask user to pre-order food;
//       var wantToPreOrder = window.confirm(
//         "Would you like to pre-order food for your table? NOTE:Once you Pre-order food you can't cancle order..."
//       );

//       if (wantToPreOrder) {
//         navigate("/pre-order", { state: { bookingId: responseData.b_id } });
//       } else {
//         navigate("/thank-you");
//       }

//       // setTables(tables.filter((table) => table.t_id !== tableId)); // Remove booked table from UI
//       // navigate("/pre-order", { state: { bookingId: responseData.b_id } }); // Redirect to PreOrder.js
//     } catch (error) {
//       console.error("Error booking table:", error);
//       alert("Booking failed. Try again.");
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="bg-primary text-white text-center p-3">
//         Welcome {customer && customer.fname} {customer && customer.lname}
//       </h1>
//       <h3 style={{ position: "absolute", top: "10px", right: "20px" }}>
//         <Link to="/logout" className="nav-link px-3">
//           Logout
//         </Link>
//       </h3>

//       {/* Booking Time Dropdown */}
//       <div className="mb-3">
//         <label>Select Booking Time:</label>
//         <select
//           className="form-select"
//           value={bookingTime}
//           onChange={(e) => {
//             setBookingTime(e.target.value);
//             fetchTables(e.target.value);
//           }}
//         >
//           <option value="">-- Select Time --</option>
//           <option value="11">11 AM</option>
//           <option value="1">1 PM</option>
//           <option value="3">3 PM</option>
//           <option value="5">5 PM</option>
//         </select>
//       </div>

//       {/* Available Tables List */}
//       <div>
//         <h3>Available Tables:</h3>
//         {tables.length === 0 ? (
//           <p>No tables available for this time slot.</p>
//         ) : (
//           <ul className="list-group">
//             {tables.map((table) => (
//               <li
//                 key={table.t_id}
//                 className="list-group-item d-flex justify-content-between align-items-center"
//                 onClick={() => setSelectedTable(table)}
//                 style={{ cursor: "pointer" }}
//               >
//                 <span>
//                   Table No: {table.table_no} | Capacity: {table.capacity} | Time
//                   Slot: {table.b_time} hrs
//                 </span>
//                 <button className="btn btn-success">Book</button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Booking Confirmation Popup */}
//       {selectedTable && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h3>Confirm Booking</h3>
//             <p>Do you want to book Table {selectedTable.table_no}?</p>
//             <button
//               className="btn btn-primary"
//               onClick={() => {
//                 confirmBooking(selectedTable.t_id);
//                 setSelectedTable(null);
//               }}
//             >
//               Yes, Book It
//             </button>
//             <button
//               className="btn btn-danger"
//               onClick={() => setSelectedTable(null)}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
