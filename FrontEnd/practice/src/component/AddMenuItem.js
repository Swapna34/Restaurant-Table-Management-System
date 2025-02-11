import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function CreateMenuItem() {
  const [menuItem, setMenuItem] = useState({
    catId: "",
    name: "",
    descp: "",
    price: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9074/transc/MenuItem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(menuItem),
      });
      if (response.ok) {
        setMessage("Menu item added successfully!");
        setMenuItem({ catId: "", name: "", descp: "", price: "" });
      } else {
        setMessage("Failed to add menu item");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Add Menu Item</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded shadow bg-light"
      >
        <div className="mb-3">
          <label className="form-label">Category ID</label>
          <input
            type="number"
            className="form-control"
            name="catId"
            value={menuItem.catId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={menuItem.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={menuItem.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="descp"
            value={menuItem.descp}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
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
  );
}

//-----------------------------------------------------//
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// export default function CreateMenuItem(){
//     const [menuItem, setMenuItem] = useState({ name: "", price: "", description: "" });
//     const [message, setMessage] = useState("");

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setMenuItem((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch("http://localhost:7133/api/menuitems", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(menuItem),
//             });
//             if (response.ok) {
//                 setMessage("Menu item added successfully!");
//                 setMenuItem({ name: "", price: "", description: "" });
//             } else {
//                 setMessage("Failed to add menu item");
//             }
//         } catch (error) {
//             setMessage("Error: " + error.message);
//         }
//     };

//     return (
//         <div className="container mt-4">
//             <h2>Add Menu Item</h2>
//             {message && <div className="alert alert-info">{message}</div>}
//             <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
//                 <div className="mb-3">
//                     <label className="form-label">Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="name"
//                         value={menuItem.name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Price</label>
//                     <input
//                         type="number"
//                         className="form-control"
//                         name="price"
//                         value={menuItem.price}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Description</label>
//                     <textarea
//                         className="form-control"
//                         name="description"
//                         value={menuItem.description}
//                         onChange={handleChange}
//                         required
//                     ></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     );

// }
