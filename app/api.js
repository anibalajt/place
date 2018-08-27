import { AsyncStorage } from "react-native";
import axios from "axios";
const endpointRegister = "http://cat.sainetapps5.com/user";
const endpointLogin = "http://cat.sainetapps5.com/app_login";
const endpointToken = "http://cat.sainetapps5.com/restws/session/token";
const endpointPlace = "http://cat.sainetapps5.com/node";
const endpointGetPlace = "http://cat.sainetapps5.com/node?type=place&author=";
let payload = {
  headers: {
    "content-type": "application/json",
    accept: "application/json",
    Authorization: "Basic cmVzdF9hcGk6MTIzNDU2Nzg5"
  }
};
export const getToken = async () => {
  try {
    payload.method = "GET";

    const response = await axios.get(endpointToken, payload);
    const token = { token: response.data };
    await AsyncStorage.setItem("token", JSON.stringify(token));
    return true;
  } catch (error) {
    console.log("error :", error);
    return false;
  }
};
const token = async () => {
  try {
    let token = await AsyncStorage.getItem("token");
    if (token) {
      token = JSON.parse(token);
      return token.token;
    }
  } catch (error) {
    console.log("error token:", error);
  }
};
export const register = async body => {
  let t = await token();
  payload.headers["x-CSRF-Token"] = t;
  payload.method = "POST";

  const response = await axios.post(endpointRegister, body, payload);
  return response.data;
};

export const login = async body => {
  let t = await token();

  payload.headers["x-CSRF-Token"] = t;
  payload.method = "POST";

  const response = await axios.post(endpointLogin, body, payload);

  return response.data;
};

export const savePlace = async body => {
  let t = await token();

  payload.headers["x-CSRF-Token"] = t;
  payload.method = "POST";

  const response = await axios.post(endpointPlace, body, payload);

  return response;
};
export const getPlace = async uid => {
  // let t = await token();

  payload.method = "GET";

  const response = await axios.get(`${endpointGetPlace}${uid}`, payload);
  return response.data;
};
