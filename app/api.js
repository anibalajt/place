import { AsyncStorage } from "react-native";
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
  payload.method = "GET";

  const response = await fetch(endpointToken, payload).then(response =>
    response.text()
  );
  try {
    const token = { token: response };
    await AsyncStorage.setItem("token", JSON.stringify(token));
  } catch (error) {
    console.log("error :", error);
    return false;
  }
};

export const register = async (token, body) => {
  payload.headers["x-CSRF-Token"] = token;
  payload.method = "POST";
  payload.body = JSON.stringify(body);

  const response = await fetch(endpointRegister, payload).then(response =>
    response.json()
  );
  return response;
};
export const login = async (token, body) => {
  payload.headers["x-CSRF-Token"] = token;
  payload.method = "POST";
  payload.body = JSON.stringify(body);

  const response = await fetch(endpointLogin, payload).then(response =>
    response.json()
  );

  return response;
};

export const savePlace = async (token, body) => {
  payload.headers["x-CSRF-Token"] = token;
  payload.method = "POST";
  payload.body = JSON.stringify(body);

  const response = await fetch(endpointPlace, payload).then(response =>
    response.json()
  );

  return response;
};
export const getPlace = async (token, uid) => {
  payload.headers["x-CSRF-Token"] = token;
  payload.method = "get";

  const response = await fetch(`${endpointGetPlace}${uid}`, payload).then(
    response => response.json()
  );

  return response;
};
