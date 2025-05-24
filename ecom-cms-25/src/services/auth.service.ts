// import type { ICredentials } from "../pages/auth/auth.contract";
// import HttpService from "./http.service";
// import Cookies from "js-cookie";

import type { ICredentials } from "../pages/auth/auth.contract";
import HttpService from "./http.service";
import Cookies from "js-cookie";

// class AuthService extends HttpService {
//   login = async (credential: ICredentials) => {
//     try {
//       const response = await this.postRequest("/log/login", credential);

//       //Cookies

//       Cookies.set("_at_39", response.data.accessToken);
//       const data = Cookies.get("_at_39")
//       console.log(data)

//       //local storage
//       localStorage.setItem("_at_39", response.data.accessToken)
//       localStorage.setItem("_rt_39", response.data.refreshToken)
//         //session
//        sessionStorage.setItem("_at_39", response.data.accessToken)
//       sessionStorage.setItem("_rt_39", response.data.refreshToken)

//     } catch (exception) {
//       console.log(exception);
//       throw exception;
//     }
//   };
// }

// const authSvc = new AuthService();
// export default authSvc;

class AuthService extends HttpService {
  getLoggedInUser = async () => {
    try {
      const response = await this.getRequest("/users/profile")
      return response.data;
    } catch (exception) {
      throw exception;
    }
  };
  login = async (credential: ICredentials) => {
    try {
      const response = await this.postRequest("/users/login", credential);

      // --- Debugging lines (you can remove them after confirming the fix) ---
      // console.log("Full response:", response);
      // console.log("Response data (before accessing token):", response.data);
      // Corrected line: Access response.data.data because your server sends the token there
      // Cookies.set("_at_39", response.data, {
      //   expires: 1,
      //   semeSite: "strict",
      //   secure: true,
      // });
      // const data = Cookies.get("_at_39");
      // console.log(data);
      // Cookies.remove("_at_39");
      // You can also continue to log the full response for reference

      //local storage
      localStorage.setItem("_at_39", response.data);
      localStorage.setItem("_rt_39", response.data);

      //SessionStorage
      // sessionStorage.setItem("_at_39", response.data);
      // sessionStorage.setItem("_rt_39", response.data);

      let userDetail = await this.getLoggedInUser();
      return userDetail;

      console.log(response);
    } catch (exception) {
      console.error("Login failed:", exception); // Use console.error for errors
      throw exception;
    }
  };
}

const authSvc = new AuthService();
export default authSvc;
