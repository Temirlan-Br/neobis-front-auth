import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.nataliya-backender.org.kg/auth/',
});

export const register = async (payload) => {
  try {
    const response = await instance.post('register/', payload);
    return response;
  } catch (error) {
    console.log('Registration failed', error);
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
export const emailSend = async (token) => {
  try {
    const response = await instance.get('confirm-email/{token}/');
    return response;
  } catch (error) {
    console.log('Confirmation email failed', error);
    throw error;
  }
};

export default instance;
