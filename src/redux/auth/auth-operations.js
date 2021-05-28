import axios from 'axios';
import * as authActions from './auth-actions';

axios.defaults.baseURL = 'https://lpj-tasker.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    dispatch(authActions.registerSuccess(data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

export const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    dispatch(authActions.loginSuccess(data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

export const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get('users/current');
    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};
