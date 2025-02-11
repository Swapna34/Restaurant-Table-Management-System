import { Link } from "react-router-dom";

export default function ManagerHome() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light mb-3">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link px-3">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="TableSave" className="nav-link px-3">
                Add Tables
              </Link>
            </li>
            <li className="nav-item">
              <Link to="GetUnBookedTable" className="nav-link px-3">
                View Unbooked Tables
              </Link>
            </li>
            <li className="nav-item">
              <Link to="GetAllTableBook" className="nav-link px-3">
                View Booked Tables
              </Link>
            </li>
            <li className="nav-item">
              <Link to="AddMenuItem" className="nav-link px-3">
                Add Menu Item
              </Link>
            </li>
            <li className="nav-item">
              <h3 style={{ position: "absolute", top: "10px", right: "20px" }}>
                <Link to="/logout" className="nav-link px-3">
                  Logout
                </Link>
              </h3>
            </li>
          </ul>
        </div>
      </nav>

      {/* <h1 className="bg-primary text-white">Manager Home Page</h1>
      <h3 style={{ position: "absolute", top: "10px", right: "20px" }}>
        <Link to="/logout" className="nav-link px-3">
          Logout
        </Link>
      </h3> */}
    </div>
  );
}
