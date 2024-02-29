import axios from "axios";
import { change_login } from "./constants";

export const login = (username, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json`).then((res) => {
      if (res.data.data) {
        dispatch({
          type: change_login,
          login: true,
        });
      }
    });
  }
};

export const logout = () => ({
  type: change_login,
  login: false,
});