import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./slice";

export default function LogoutComp() {
  const navigate = useNavigate(); //hook from route
  const dispatch = useDispatch();

  localStorage.clear();

  dispatch(logout());
  navigate("/");
}
