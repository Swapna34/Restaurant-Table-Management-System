import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginFormP from "./component/Login";
import AdminHome from "./component/AdminHome.js";
import ManagerHome from "./component/ManagerHome.js";
import CustomerHome from "./component/CustomerHome.js";
import RegistrationForm from "./component/registrationForm.js";
import ManagerRegistration from "./component/ManagerRegistration.js";
import { useSelector } from "react-redux";
import LogoutComp from "./component/LogoutComp.js";
import CustomerRegistration from "./component/RegisterCustomer.js";
import ManagerRegistration2 from "./component/RegisterManager.js";
import PreOrder from "./component/PreOrder.js";
import Success from "./component/success.js";
import Thankyou from "./component/thank-you.js";
import BackButton from "./component/BackButton.js";
import BookedTables from "./component/GetAllTableBook.js";
import NotBookedTables from "./component/GetUnBookedTable.js";
import TableSave from "./component/TableSave.js";
import CreateMenuItem from "./component/AddMenuItem.js";
//import HomeImage from "./images/Home.jpg"; // Ensure this path is correct

function App() {
  const mystate = useSelector((state) => state.logged);

  // const backgroundStyle = {
  //   backgroundImage: "url('./images/Home.jpg')", // Update with actual image path
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   height: "100vh",
  //   width: "100vw",
  // };

  return (
    <div className="App">
      {/* <div className="App"> */}
      <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
        <nav className="navbar navbar-expand-sm bg-light mb-3">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link px-3">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="login" className="nav-link px-3">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="registration" className="nav-link px-3">
                  Registration
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <h1 className="bg-primary text-white">Welcome To Hotel BLIVSTAR</h1>
      </div>

      <Routes>
        {/* <Route path="login" element={<LoginFormP />}></Route>
        {/* <Route path="registration" element={<RegistrationForm />}></Route> */}
        {/*<Route path="registration" element={<CustomerRegistration />}></Route>
        <Route
          path="/admin_home/RegisterManager"
          element={<ManagerRegistration2 />}
        ></Route> */}

        <Route path="login" element={<LoginFormP />}></Route>

        <Route path="registration" element={<CustomerRegistration />}></Route>
        <Route
          path="/admin_home/RegisterManager"
          element={<ManagerRegistration2 />}
        ></Route>
        <Route
          path="/admin_home/GetAllTableBook"
          element={<BookedTables />}
        ></Route>
        <Route
          path="/admin_home/GetUnBookedTable"
          element={<NotBookedTables />}
        ></Route>
        <Route
          path="/admin_home/AddMenuItem"
          element={<CreateMenuItem />}
        ></Route>
        <Route path="/admin_home/TableSave" element={<TableSave />}></Route>
        <Route path="/manager_home/TableSave" element={<TableSave />}></Route>
        <Route
          path="/manager_home/AddMenuItem"
          element={<CreateMenuItem />}
        ></Route>
        <Route
          path="/manager_home/GetAllTableBook"
          element={<BookedTables />}
        ></Route>
        <Route
          path="/manager_home/GetUnBookedTable"
          element={<NotBookedTables />}
        ></Route>
        <Route path="admin_home" element={<AdminHome />}></Route>
        <Route path="manager_home" element={<ManagerHome />}></Route>
        <Route path="customer_home" element={<CustomerHome />}></Route>
        <Route path="/pre-order" element={<PreOrder />} />
        <Route path="/success" element={<Success />} />
        <Route path="/thank-you" element={<Thankyou />} />
        <Route path="/logout" element={<LogoutComp />}></Route>
        <Route path="/back" element={<BackButton />}></Route>
      </Routes>
    </div>
    // </div>
  );
}

export default App;
