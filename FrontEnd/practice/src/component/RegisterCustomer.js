import { useState, useReducer, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export default function CustomerRegistration() {
  const init = {
    fname: "",
    lname: "",
    pwd: "",
    email: "",
    contact: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fld]: action.value };
      case "reset":
        return init;
      default:
        return state;
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [info, dispatch] = useReducer(reducer, init);
  const navigate = useNavigate();

  const sendData = (data) => {
    console.log("Submitted Data:", JSON.stringify(data));

    const reqinfo = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("http://localhost:8070/auth/regCustomer", reqinfo)
      .then((resp) => {
        if (resp.ok) return resp.json();
        else throw new Error("server error");
      })
      .then((obj) => {
        alert("Registration successful! Please try logging in.");
        navigate("/");
      })
      .catch((error) => alert("Server error. Please try again later."));
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-lg p-4">
        <h1 className="text-center text-primary">Register Customer</h1>
        <form onSubmit={handleSubmit(sendData)}>
          {/* First Name */}
          <div className="mb-3">
            <label htmlFor="fname" className="form-label">
              First Name:
            </label>
            <input
              id="fname"
              type="text"
              className="form-control"
              {...register("fname", { required: true, minLength: 2 })}
              value={info.fname}
              onChange={(e) =>
                dispatch({
                  type: "update",
                  fld: "fname",
                  value: e.target.value,
                })
              }
            />
            {errors.fname && (
              <p className="text-danger">
                First name is required and must be at least 2 characters long.
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className="mb-3">
            <label htmlFor="lname" className="form-label">
              Last Name:
            </label>
            <input
              id="lname"
              type="text"
              className="form-control"
              {...register("lname", { required: true, minLength: 2 })}
              value={info.lname}
              onChange={(e) =>
                dispatch({
                  type: "update",
                  fld: "lname",
                  value: e.target.value,
                })
              }
            />
            {errors.lname && (
              <p className="text-danger">
                Last name is required and must be at least 2 characters long.
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              id="email"
              type="email"
              className="form-control"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              value={info.email}
              onChange={(e) =>
                dispatch({
                  type: "update",
                  fld: "email",
                  value: e.target.value,
                })
              }
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">
              Password:
            </label>
            <input
              id="pwd"
              type="password"
              className="form-control"
              {...register("pwd", {
                required: "Password is required",
                pattern: {
                  value: /^[A-Za-z0-9*%$_.-]{8,12}$/,
                  message:
                    "Password must be 8-12 characters long and include alphanumeric characters.",
                },
              })}
              value={info.pwd}
              onChange={(e) =>
                dispatch({ type: "update", fld: "pwd", value: e.target.value })
              }
            />
            {errors.pwd && <p className="text-danger">{errors.pwd.message}</p>}
            <div id="passwordHelp" className="form-text">
              Password must be 8-12 characters long and include alphanumeric
              characters.
            </div>
          </div>

          {/* Contact */}
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">
              Contact No:
            </label>
            <input
              id="contact"
              type="text"
              className="form-control"
              {...register("contact", {
                required: "Contact number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Contact must be a 10-digit number",
                },
              })}
              value={info.contact}
              onChange={(e) =>
                dispatch({
                  type: "update",
                  fld: "contact",
                  value: e.target.value,
                })
              }
            />
            {errors.contact && (
              <p className="text-danger">{errors.contact.message}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary me-2">
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                reset();
                dispatch({ type: "reset" });
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
//----------------------------------------
// import { useState, useReducer, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router";

// // Updated
// export default function CustomerRegistration() {
//   const init = {
//     fname: "",
//     lname: "",
//     pwd: "",
//     email: "",
//     contact: "",
//   };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "update":
//         return { ...state, [action.fld]: action.value };
//       case "reset":
//         return init;
//       default:
//         return state;
//     }
//   };

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const [info, dispatch] = useReducer(reducer, init);

//   const navigate = useNavigate();

//   const sendData = (data) => {
//     console.log("Submitted Data:", JSON.stringify(data));

//     const reqinfo = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     };

//     fetch("http://localhost:8081/regCustomer", reqinfo)
//       // .then(resp => console.log("Response:", resp))
//       // .catch(err => console.error("Error:", err));
//       .then((resp) => {
//         if (resp.ok) return resp.json();
//         else throw new Error("server error");
//       })
//       .then((obj) => {
//         alert("Registartion sucessful...try login");
//         navigate("/");
//       })
//       .catch((error) => alert("server error ...Try later"));
//   };

//   return (
//     <div>
//       <h1>Register Customer</h1>
//       <form onSubmit={handleSubmit(sendData)}>
//         {/* First Name */}
//         <div className="mb-3">
//           <label htmlFor="fname" className="form-label">
//             Enter First Name:
//           </label>
//           <input
//             id="fname"
//             type="text"
//             // {...register("fname", { required: "Name is required",
//             //      minLength: { value: 2, message: "Name should have at least 2 characters" } })}
//             {...register("fname", { required: true, minLength: 2 })}
//             value={info.fname}
//             onChange={(e) =>
//               dispatch({ type: "update", fld: "fname", value: e.target.value })
//             }
//           />
//           {/* {errors.fname && <p>{errors.fname.message}</p>} */}
//           {errors.fname && errors.fname.type === "required" && (
//             <p> Please enter first name</p>
//           )}
//           {errors.fname && errors.fname.type === "minLength" && (
//             <p> Name should have min 2 characters </p>
//           )}
//         </div>

//         {/* Last Name */}
//         <div className="mb-3">
//           <label htmlFor="lname" className="form-label">
//             Enter Last Name:
//           </label>
//           <input
//             id="lname"
//             type="text"
//             {...register("lname", {
//               required: "Please enter last name",
//               minLength: {
//                 value: 2,
//                 message: "Name should have at least 2 characters",
//               },
//             })}
//             value={info.lname}
//             onChange={(e) =>
//               dispatch({ type: "update", fld: "lname", value: e.target.value })
//             }
//           />
//           {errors.lname && <p>{errors.lname.message}</p>}
//         </div>

//         {/* Email */}
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Enter Email ID:
//           </label>
//           <input
//             id="email"
//             type="email"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                 message: "Invalid email format",
//               },
//             })}
//             value={info.email}
//             onChange={(e) =>
//               dispatch({ type: "update", fld: "email", value: e.target.value })
//             }
//           />
//           {errors.email && <p>{errors.email.message}</p>}
//         </div>

//         {/* Password */}
//         <div className="mb-3">
//           <label htmlFor="pwd" className="form-label">
//             Enter Password:
//           </label>
//           <input
//             id="pwd"
//             type="password"
//             {...register("pwd", {
//               required: "Password is required",
//               pattern: {
//                 value: /^[A-Za-z0-9*%$_.-]{8,12}$/,
//                 message: "Please enter valid password",
//               },
//             })}
//             value={info.pwd}
//             onChange={(e) =>
//               dispatch({ type: "update", fld: "pwd", value: e.target.value })
//             }
//           />
//           {errors.pwd && <p>{errors.pwd.message}</p>}

//           <div id="emailHelp" className="form-text">
//             Password should be more than 8 characters , should include
//             alphanumeric characters
//           </div>
//         </div>

//         {/* Contact */}
//         <div className="mb-3">
//           <label htmlFor="contact" className="form-label">
//             Enter Contact No:
//           </label>
//           <input
//             id="contact"
//             type="text"
//             {...register("contact", {
//               required: "Contact is required",
//               pattern: {
//                 value: /^[0-9]{10}$/,
//                 message: "Contact must be a 10-digit number",
//               },
//             })}
//             value={info.contact}
//             onChange={(e) =>
//               dispatch({
//                 type: "update",
//                 fld: "contact",
//                 value: e.target.value,
//               })
//             }
//           />
//           {errors.contact && <p>{errors.contact.message}</p>}
//         </div>

//         {/* Buttons */}
//         <button type="submit" className="btn btn-primary mb-3">
//           Save
//         </button>
//         <button
//           type="button"
//           className="btn btn-secondary mb-3"
//           onClick={() => {
//             reset();
//             dispatch({ type: "reset" });
//           }}
//         >
//           Reset
//         </button>
//       </form>
//       <pre>{JSON.stringify(info, null, 2)}</pre>
//     </div>
//   );
// }
