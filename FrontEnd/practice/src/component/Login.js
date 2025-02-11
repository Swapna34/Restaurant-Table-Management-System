import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./slice";

export default function LoginFormP() {
  const init = {
    email: "",
    pwd: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fld]: action.val };
      case "reset":
        return init;
    }
  };

  const [info, dispatch] = useReducer(reducer, init);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const reduxAction = useDispatch();

  const sendData = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    };
    fetch("http://localhost:8070/auth/checklogin", reqOptions)
      .then((resp) => resp.text())
      .then((text) => (text.length ? JSON.parse(text) : {}))
      .then((obj) => {
        if (Object.keys(obj).length === 0) {
          setMsg("Wrong UID/PWD");
        } else {
          reduxAction(login());
          localStorage.setItem("loggedUser", JSON.stringify(obj));
          if (obj.rid.rid === 1) {
            navigate("/admin_home");
          } else if (obj.rid.rid === 2) {
            navigate("/manager_home");
          } else if (obj.rid.rid === 3) {
            navigate("/customer_home");
          }
        }
      });
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              value={info.email}
              onChange={(e) => {
                dispatch({ type: "update", fld: "email", val: e.target.value });
              }}
            />
            <div className="form-text">
              We will never share your email with anyone.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label fw-bold">
              Password
            </label>
            <input
              type="password"
              name="pwd"
              id="pwd"
              className="form-control"
              value={info.pwd}
              onChange={(e) => {
                dispatch({ type: "update", fld: "pwd", val: e.target.value });
              }}
            />
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => sendData(e)}
            >
              Submit
            </button>
          </div>
          <div className="d-grid mt-2">
            <button
              type="reset"
              className="btn btn-secondary"
              onClick={() => dispatch({ type: "reset" })}
            >
              Clear
            </button>
          </div>
        </form>
        {msg && <div className="alert alert-danger mt-3">{msg}</div>}
      </div>
    </div>
  );
}

// //------------------------------------------------------------
// import { useReducer, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { login } from "./slice";

// export default function LoginFormP() {
//   const init = {
//     email: "",
//     pwd: "",
//   };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "update":
//         return { ...state, [action.fld]: action.val };
//       case "reset":
//         return init;
//       default:
//         return state;
//     }
//   };

//   const [info, dispatch] = useReducer(reducer, init);
//   const [msg, setMsg] = useState("");
//   const [errors, setErrors] = useState({ email: "", pwd: "" });
//   const navigate = useNavigate();
//   const reduxAction = useDispatch();

//   const validate = () => {
//     let isValid = true;
//     let newErrors = { email: "", pwd: "" };

//     // Email Validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!info.email) {
//       newErrors.email = "Email is required.";
//       isValid = false;
//     } else if (!emailRegex.test(info.email)) {
//       newErrors.email = "Enter a valid email address.";
//       isValid = false;
//     }

//     // Password Validation
//     const passwordRegex =
//       /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     if (!info.pwd) {
//       newErrors.pwd = "Password is required.";
//       isValid = false;
//     } else if (!passwordRegex.test(info.pwd)) {
//       newErrors.pwd =
//         "Password must be at least 8 characters, include one uppercase letter, one number, and one special character.";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const sendData = (e) => {
//     e.preventDefault();

//     if (!validate()) {
//       return;
//     }

//     const reqOptions = {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(info),
//     };

//     fetch("http://localhost:8081/checklogin", reqOptions)
//       .then((resp) => resp.text())
//       .then((text) => (text.length ? JSON.parse(text) : {}))
//       .then((obj) => {
//         if (Object.keys(obj).length === 0) {
//           setMsg("Wrong UID/PWD");
//         } else {
//           reduxAction(login());
//           localStorage.setItem("loggedUser", JSON.stringify(obj));
//           console.log(JSON.stringify(obj));
//           if (obj.rid.rid === 1) navigate("/admin_home");
//           else if (obj.rid.rid === 2) navigate("/manager_home");
//           else if (obj.rid.rid === 3) navigate("/customer_home");
//         }
//       })
//       .catch(() => alert("Server Error. Try after some time..."));
//   };

//   return (
//     <div>
//       <form>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Enter Email:
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             className="form-control"
//             value={info.email}
//             onChange={(e) =>
//               dispatch({ type: "update", fld: "email", val: e.target.value })
//             }
//           />
//           {errors.email && <div className="text-danger">{errors.email}</div>}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="pwd" className="form-label">
//             Enter Password:
//           </label>
//           <input
//             type="password"
//             name="pwd"
//             id="pwd"
//             className="form-control"
//             value={info.pwd}
//             onChange={(e) =>
//               dispatch({ type: "update", fld: "pwd", val: e.target.value })
//             }
//           />
//           {errors.pwd && <div className="text-danger">{errors.pwd}</div>}
//         </div>

//         <button
//           type="submit"
//           className="btn btn-primary mb-3"
//           onClick={sendData}
//         >
//           Submit
//         </button>
//         <button
//           type="reset"
//           className="btn btn-secondary mb-3"
//           onClick={() => dispatch({ type: "reset" })}
//         >
//           Clear
//         </button>
//       </form>

//       <p>{msg}</p>
//     </div>
//   );
// }
