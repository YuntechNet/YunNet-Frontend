const ID_TOKEN_KEY = "id_token";
const USERNAME = "username";

export const getToken = () => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

export const getUsername = () => {
  return window.localStorage.getItem(USERNAME);
};

export const saveToken = (token, username) => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
  window.localStorage.setItem(USERNAME, username);
};

export const destroyToken = () => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
  window.localStorage.removeItem(USERNAME);
};

export default { getToken, saveToken, destroyToken, getUsername };
