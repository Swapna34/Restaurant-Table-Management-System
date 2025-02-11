import { useState, useReducer, useEffect } from "react";
export default function RegistrationForm() {
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
    }
  };
  const [info, dispatch] = useReducer(reducer, init);

  const sendData = (e) => {
    console.log(JSON.stringify(info));

    const reqinfo = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        fname: info.fname,
        lname: info.lname,
        email: info.email,
        pwd: info.pwd,
        contact: info.contact,
      }),
    };

    fetch("http://localhost:8070/auth/regCustomer", reqinfo).then((resp) =>
      console.log(resp)
    );
  };

  return (
    <div>
      <h1>Register Customer</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">
            Enter First Name :
          </label>
          <input
            type="text"
            name="fname"
            value={info.fname}
            onChange={(e) => {
              dispatch({ type: "update", fld: "fname", value: e.target.value });
            }}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>

        <div className="mb-3">
          <label htmlFor="lname" className="form-label">
            Enter Last Name :{" "}
          </label>
          <input
            type="text"
            name="lname"
            value={info.lname}
            onChange={(e) => {
              dispatch({ type: "update", fld: "lname", value: e.target.value });
            }}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Enter EmailId :
          </label>
          <input
            type="text"
            name="email"
            value={info.email}
            onChange={(e) => {
              dispatch({ type: "update", fld: "email", value: e.target.value });
            }}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>

        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Enter Password :
          </label>
          <input
            type="text"
            name="pwd"
            value={info.password}
            onChange={(e) => {
              dispatch({
                type: "update",
                fld: "pwd",
                value: e.target.value,
              });
            }}
          />
          <div id="emailHelp" className="form-text">
            Password should be more than 8 characters , should include
            alphanumeric characters
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="contact" className="form-label">
            Enter contact no :
          </label>
          <input
            type="text"
            name="contact"
            value={info.contact}
            onChange={(e) => {
              dispatch({
                type: "update",
                fld: "contact",
                value: e.target.value,
              });
            }}
          />
        </div>

        <div id="emailHelp" className="form-text"></div>

        <button
          type="submit"
          className="btn btn-primary mb-3"
          onClick={(e) => {
            sendData(e);
          }}
        >
          Save{" "}
        </button>
        <button
          type="reset"
          className="btn btn-primary mb-3"
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          {" "}
          Reset{" "}
        </button>
        <br />
      </form>
      <br />
      {JSON.stringify(info)}
      <br />
    </div>
  );
}
