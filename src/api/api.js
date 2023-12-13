import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://161.35.24.60:8000/auth/',
});

export const register = async (payload) => {
  try {
    const response = await instance.post('register/', payload);
    return response;
  } catch (error) {
    console.log('Login failed', error);
  }
};
export const login = async (payload) => {
  try {
    const response = await instance.post('login/', payload);
    // instance.head.auth = `Barrier ${response.data.tokens}`
    return response;
  } catch (error) {
    console.log('Login failed', error);
  }
};
