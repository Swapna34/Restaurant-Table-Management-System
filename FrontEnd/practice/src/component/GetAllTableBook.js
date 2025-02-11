// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function BookedTables() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8082/getAllBookedTables")
//       .then((response) => response.json())
//       .then((data) => setBookings(data))
//       .catch((error) => console.error("Error fetching booked tables:", error));
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-3">Booked Tables</h2>
//       <table className="table table-bordered table-striped">
//         <thead className="thead-dark">
//           <tr>
//             <th>Booking ID</th>
//             <th>Customer ID</th>
//             <th>Table No</th>
//             <th>Booking Date</th>
//             <th>Booking Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.length > 0 ? (
//             bookings.map((booking) => (
//               <tr key={booking.b_id}>
//                 <td>{booking.b_id}</td>
//                 <td>{booking.c_id}</td>
//                 <td>{booking.t_id}</td>
//                 <td>{booking.b_date}</td>
//                 <td>{booking.b_time}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" className="text-center">No bookings found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BookedTables() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8070/crud/getAllBookedTables")
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error("Error fetching booked tables:", error));
  }, []);

  return (
    <div
      className="container mt-4 d-flex flex-column justify-content-between"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <h2 className="mb-3">Booked Tables</h2>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Booking ID</th>
              <th>Customer ID</th>
              <th>Table No</th>
              <th>Booking Date</th>
              <th>Booking Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking.b_id}>
                  <td>{booking.b_id}</td>
                  <td>{booking.c_id}</td>
                  <td>{booking.t_id}</td>
                  <td>{booking.b_date}</td>
                  <td>{booking.b_time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <button
        className="btn btn-success btn-sm mt-3"
        style={{ width: "80px", alignSelf: "center" }}
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
    </div>
  );
}
