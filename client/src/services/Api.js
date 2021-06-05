import axios from "axios";

export default () => {
  return axios.create({
    //baseURL: "https://webportalrwa.herokuapp.com/",
    baseURL: "http://localhost:5000/",
  });
};
