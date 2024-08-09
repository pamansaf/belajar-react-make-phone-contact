import Axios from "axios";

Axios.create({
  baseURL: "http://localhost:3000/contacts",
});

export default Axios;
