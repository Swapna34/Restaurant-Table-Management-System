import { useReducer, userState } from "react";
const init = {
  uid: "000",
  cid: "000",
  fname: "XXXX",
  lname: "XXXX",
  email: "xxx@gamil.com",
  pwd: "0000",
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "update": {
      return { ...state, [action.field]: action.value };
    }
  }
};

export default function Registration() {
  const [info, dispatch] = useReducer(Reducer, init);

  return (
    <div>
      <form>
        Enter First Name:
        <input
          type="text"
          name="fname"
          value={info.fname}
          onChange={(e) => {
            dispatch({ type: "update", field: "fname", value: e.target.value });
          }}
        />
        <br />
        Enter Last name:
        <input
          type="text"
          name="lname"
          value={info.lname}
          onChange={(e) => {
            dispatch({ type: "update", field: "lname", value: e.target.value });
          }}
        />
        <br />
        Enter Email:
        <input
          type="email"
          name="email"
          value={info.email}
          onChange={(e) => {
            dispatch({ type: "update", field: "email", value: e.target.value });
          }}
        />
        <br />
        Enter Password:
        <input
          type="password"
          name=""
          pwd
          value={info.pwd}
          onChange={(e) => {
            dispatch({ type: "update", field: "pwd", value: e.target.value });
          }}
        />
        <br />
        <input type="button" value="Register" />
      </form>
      <p style={{ display: "none" }}></p>
    </div>
  );
}
