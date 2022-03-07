import axios from "axios";

const CREATE_VISITOR_URL = " https://localhost:8080/users";
const LOGIN_VISITOR_URL = "http://localhost:8080/user/login";

class UserService {
  createVisitor(user) {
    return axios.post(CREATE_VISITOR_URL, user);
  }

  login(user) {
    return axios.put(LOGIN_VISITOR_URL, user);
  }

}

export default new UserService();
