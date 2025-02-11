import { useState, useReducer, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

// Updated
export default function ManagerRegistration2() {
  const init = {
    fname: "",
    lname: "",
    pwd: "",
    email: "",
    contact_no: "",
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
      // body : JSON.stringify({fname:info.fname , lname:info.lname , email:info.email ,
      //  pswd:info.pwd , contact:info.contact , h_id:info.h_id})
    };

    fetch("http://localhost:8070/auth/regManager", reqinfo)
      // .then(resp => console.log("Response:", resp))
      // .catch(err => console.error("Error:", err));
      .then((resp) => {
        if (resp.ok) return resp.json();
        else throw new Error("server error");
      })
      .then((obj) => {
        alert("Registartion sucessful...try login");
        navigate("/");
      })
      .catch((error) => alert("server error ...Try later"));
  };

  return (
    <div>
      <h1>Register Manager</h1>
      <form onSubmit={handleSubmit(sendData)}>
        {/* First Name */}
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">
            Enter First Name:
          </label>
          <input
            id="fname"
            type="text"
            {...register("fname", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name should have at least 2 characters",
              },
            })}
            value={info.fname}
            onChange={(e) =>
              dispatch({ type: "update", fld: "fname", value: e.target.value })
            }
          />
          {errors.fname && <p>{errors.fname.message}</p>}
        </div>

        {/* Last Name */}
        <div className="mb-3">
          <label htmlFor="lname" className="form-label">
            Enter Last Name:
          </label>
          <input
            id="lname"
            type="text"
            {...register("lname", {
              required: "Please enter last name",
              minLength: {
                value: 2,
                message: "Name should have at least 2 characters",
              },
            })}
            value={info.lname}
            onChange={(e) =>
              dispatch({ type: "update", fld: "lname", value: e.target.value })
            }
          />
          {errors.lname && <p>{errors.lname.message}</p>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Enter Email ID:
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
            value={info.email}
            onChange={(e) =>
              dispatch({ type: "update", fld: "email", value: e.target.value })
            }
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Enter Password:
          </label>
          <input
            id="pwd"
            type="password"
            {...register("pwd", {
              required: "Password is required",
              pattern: {
                value: /^[A-Za-z0-9*%$_.-]{8,12}$/,
                message: "Please enter valid password",
              },
            })}
            value={info.pwd}
            onChange={(e) =>
              dispatch({ type: "update", fld: "pwd", value: e.target.value })
            }
          />
          {errors.pwd && <p>{errors.pwd.message}</p>}

          <div id="emailHelp" className="form-text">
            Password should be more than 8 characters , should include
            alphanumeric characters
          </div>
        </div>

        {/* Contact */}
        <div className="mb-3">
          <label htmlFor=" contact_no" className="form-label">
            Enter Contact No:
          </label>
          <input
            id=" contact_no"
            type="text"
            {...register(" contact_no", {
              required: "Contact is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Contact must be a 10-digit number",
              },
            })}
            value={info.contact}
            onChange={(e) =>
              dispatch({
                type: "update",
                fld: " contact_no",
                value: e.target.value,
              })
            }
          />
          {errors.contact_no && <p>{errors.contact_no.message}</p>}
        </div>

        {/* HotelId */}
        <div className="mb-3">
          {/* <label htmlFor="h_id" className="form-label">
            Select hotel :
          </label>
          <select
            id="h_id"
            {...register("h_id", {
              required: "Please select a hotel",
              validate: (value) => value !== "none" || "Select a valid hotel",
            })}
            value={info.h_id}
            onChange={(e) => {
              dispatch({ type: "update", fld: "h_id", value: e.target.value });
            }}
          >
            <option value="none">Select</option>
            <option value="1">Amaya</option>
            <option value="2">Amaya1</option>
          </select> */}
          {/* {errors.h_id && <p>{errors.h_id.message}</p>} */}
          <div id="emailHelp" className="form-text"></div>
        </div>

        {/* Buttons */}
        <button type="submit" className="btn btn-primary mb-3">
          Save
        </button>
        <button
          type="button"
          className="btn btn-secondary mb-3"
          onClick={() => {
            reset();
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </button>
      </form>
      <pre>{JSON.stringify(info, null, 2)}</pre>
    </div>
  );
}
