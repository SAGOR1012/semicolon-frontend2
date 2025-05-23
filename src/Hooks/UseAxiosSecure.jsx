import React, { useEffect } from 'react';
import UseAuth from './UseAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  // withCredentials: true, // <-- enables sending cookies
});
const UseAxiosSecure = () => {
  const { logOut } = UseAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log('error track', error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log('logout the user');
          logOut()
            .then(() => {
              navigate('/login');
            })
            .catch((error) => console.log(error));
        }
      }
    );
  });
  return <div></div>;
};

export default UseAxiosSecure;
