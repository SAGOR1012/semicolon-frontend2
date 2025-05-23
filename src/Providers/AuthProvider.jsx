import { useState, createContext, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { app } from '../Firebase/firebase.config';
import UseAxiosPublic from '../Hooks/UseAxiosPublic';

export const AuthContext = createContext(null);
const axiosPublic = UseAxiosPublic();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  /* for loading show korar jonne */
  const [loading, setLoading] = useState(true);

  /* signUP /create new user  */
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* login /signIn */
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  /* log Out */
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    /* on authStateChange sobsomoy watch korte thakbe j kokhn change hocche */
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log('current user ', currentUser);
      if (currentUser) {
        //get token and store client
        const userInfo = { email: currentUser.email };
        axiosPublic.post('/jwt', userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem('access-token', res.data.token);
          }
        });
      } else {
        // TODO: remove token if token stron inthe client side: local storage ,cashing , in memory
        localStorage.removeItem('access-token');
      }

      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
