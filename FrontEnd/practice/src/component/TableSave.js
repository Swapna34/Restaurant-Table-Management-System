import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function SaveTable() {
  const [table, setTable] = useState({
    capacity: "",
    status: "Available",
    b_time: "",
    table_no: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setTable({ ...table, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8070/crud/saveTable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(table),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Table Data Saved:", data);
        alert("Table saved successfully!");
        setTable({
          capacity: "",
          status: "Available",
          b_time: "",
          table_no: "",
        });
      } else {
        alert("Failed to save table");
      }
    } catch (error) {
      console.error("Error saving table:", error);
      alert("An error occurred while saving the table");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h2 className="text-center">Save Table</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Capacity</label>
            <input
              type="number"
              className="form-control"
              name="capacity"
              value={table.capacity}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Booking Time (in hours)</label>
            <input
              type="number"
              className="form-control"
              name="b_time"
              value={table.b_time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Table Number</label>
            <input
              type="number"
              className="form-control"
              name="table_no"
              value={table.table_no}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Save Table
          </button>
        </form>
        <button
          className="btn btn-success btn-sm mt-3"
          style={{ width: "80px", alignSelf: "center" }}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

//-----------------------------------------------//
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function SaveTable(){

//   const [table, setTable] = useState({
//     capacity: "",
//     status: "Available",
//     b_time: "",
//     table_no: "",
//   });

//   const handleChange = (e) => {
//     setTable({ ...table, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Table Data Saved:", table);
//     alert("Table saved successfully!");
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card p-4">
//         <h2 className="text-center">Save Table</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="form-label">Capacity</label>
//             <input
//               type="number"
//               className="form-control"
//               name="capacity"
//               value={table.capacity}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           {/*<div className="mb-3">
//             <label className="form-label">Status</label>
//             <select
//               className="form-select"
//               name="status"
//               value={table.status}
//               onChange={handleChange}
//             >
//               <option value="Available">Available</option>
//               <option value="Reserved">Reserved</option>
//             </select>
//           </div>*/}
//           <div className="mb-3">
//             <label className="form-label">Booking Time (in hours)</label>
//             <input
//               type="number"
//               className="form-control"
//               name="b_time"
//               value={table.b_time}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Table Number</label>
//             <input
//               type="number"
//               className="form-control"
//               name="table_no"
//               value={table.table_no}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary w-100">
//             Save Table
//           </button>
//         </form>
//       </div>
//     </div>
//   );

// }
