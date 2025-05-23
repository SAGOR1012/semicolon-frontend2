import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';

const PrivetRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation(); // location path ber krar jonne use kora hoise
  /* jodi loading hoy tahole spinner show korbe  */
  if (loading) {
    <LoadingSpinner></LoadingSpinner>;
  }
  /* loading sesh hole jodi user login thake tahle samne jabe naile login page a payahy dibe  */
  if (user) return children;

  return (
    /* login korar age kon location a chilo seita janar jonne use kora hoise , eita bar login page er moodhe bosate hobe  */
    <Navigate
      to='/login'
      state={{ from: location }}
      replace></Navigate>
  );
};

export default PrivetRoute;
