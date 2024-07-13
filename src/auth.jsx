import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './auth.css';

const Auth = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className="auth-container">
      {isAuthenticated ? (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button>
      ) : (
        <>
          <button onClick={() => loginWithRedirect({ screen_hint: "signup" })}>
            Sign Up
          </button>
          <button onClick={() => loginWithRedirect()}>
            Log In
          </button>
        </>
      )}
    </div>
  );
};

export default Auth;
