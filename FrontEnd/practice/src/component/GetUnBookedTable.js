// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function NotBookedTables() {
//   const [tables, setTables] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8082/getNotBookedTables")
//       .then((response) => response.json())
//       .then((data) => setTables(data))
//       .catch((error) => console.error("Error fetching not booked tables:", error));
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-3">Available Tables</h2>
//       <table className="table table-bordered table-striped">
//         <thead className="thead-dark">
//           <tr>
//           <th>Table No</th>
//             <th>Capacity</th>
//             <th>Booking Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tables.length > 0 ? (
//             tables.map((table) => (
//               <tr key={table.id}>
//                 <td>{table.table_no}</td>
//                 <td>{table.capacity}</td>
//                 <td>{table.b_time}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3" className="text-center">No available tables</td>
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

export default function NotBookedTables() {
  const [tables, setTables] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8070/crud/getNotBookedTables")
      .then((response) => response.json())
      .then((data) => setTables(data))
      .catch((error) =>
        console.error("Error fetching not booked tables:", error)
      );
  }, []);

  return (
    <div
      className="container mt-4 d-flex flex-column justify-content-between"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <h2 className="mb-3">Available Tables</h2>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Table No</th>
              <th>Capacity</th>
              <th>Booking Time</th>
            </tr>
          </thead>
          <tbody>
            {tables.length > 0 ? (
              tables.map((table) => (
                <tr key={table.id}>
                  <td>{table.table_no}</td>
                  <td>{table.capacity}</td>
                  <td>{table.b_time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  No available tables
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
