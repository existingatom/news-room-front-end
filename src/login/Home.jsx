import { signOut } from "firebase/auth";
import React from "react";
import { auth } from './FirebaseConfig'; // Correctly import auth
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
    const history = useNavigate();

    const handleClick = () => {
        signOut(auth).then(() => {
            console.log("Signed out successfully");
            history('/');
        }).catch(error => {
            console.error("Sign out error", error);
        });
    };

    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleClick}>Sign Out</button>
        </div>
    );
};

export default HomeScreen;
