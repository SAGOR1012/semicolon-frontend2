import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_API,
  // withCredentials: true, // <-- enables sending cookies
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
