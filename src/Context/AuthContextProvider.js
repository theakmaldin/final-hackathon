import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  // getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../fire";

export const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

// const auth = getAuth();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");

  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const handleSignUp = () => {
    console.log(email);
    clearError();
    createUserWithEmailAndPassword(auth, email, password).catch(error => {
      switch (error.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(error.message);
          break;
        case "auth/weak-password":
          setPasswordError(error.message);
          break;
        default:
          setEmailError(error.message);
          setPasswordError(error.message);
      }
    });
  };

  const handleLogin = () => {
    clearError();
    signInWithEmailAndPassword(auth, email, password).catch(error => {
      switch (error.code) {
        case "auth/invalid-email":
        case "auth/user-not-found":
        case "auth/user-disabled":
          setEmailError(error.message);
          break;
        case "auth/wrong-password":
          setPasswordError(error.message);
          break;
        default:
          setEmailError(error.message);
          setPasswordError(error.message);
      }
    });
  };

  const handleLogOut = () => {
    signOut(auth);
  };

  const authListener = () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);

  const authCloud = {
    email,
    user,
    password,
    emailError,
    passwordError,
    hasAccount,

    setEmail,
    setPassword,
    setHasAccount,

    handleLogin,
    handleLogOut,
    handleSignUp,
  };

  return (
    <authContext.Provider value={authCloud}>{children}</authContext.Provider>
  );
};

export default AuthContextProvider;
