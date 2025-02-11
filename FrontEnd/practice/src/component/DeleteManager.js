import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DeleteManager() {
  const [managerId, setManagerId] = useState("");
  const [isActive, setIsActive] = useState("true");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    if (!managerId.trim()) {
      setMessage("Manager ID is required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/deleteManager?m_id=" + managerId, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_active: isActive === "true" })
      });

      const data = await response.json();
      setMessage(data ? "Manager status updated successfully." : "Manager not found.");
    } catch (error) {
      setMessage("Error updating manager status.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Update Manager Status</h2>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Enter Manager ID"
            value={managerId}
            onChange={(e) => setManagerId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <select className="form-select" value={isActive} onChange={(e) => setIsActive(e.target.value)}>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>
        <button className="btn btn-primary w-100" onClick={handleDelete}>Update Status</button>
        {message && <p className="mt-3 text-center text-danger">{message}</p>}
      </div>
    </div>
  );
}