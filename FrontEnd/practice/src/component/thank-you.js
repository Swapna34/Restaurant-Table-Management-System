import { Link } from "react-router-dom";

export default function Thankyou() {
  return (
    <div>
      <h1>Thank You For Visiting Us....</h1>
      <h3 style={{ position: "absolute", top: "10px", right: "20px" }}>
        <Link to="/logout" className="nav-link px-3">
          Logout
        </Link>
      </h3>
    </div>
  );
}
