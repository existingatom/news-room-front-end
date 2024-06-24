import React from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./FirebaseConfig"; // Correctly import auth
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailVal = e.target.email.value;
        sendPasswordResetEmail(auth, emailVal)
            .then(() => {
                alert("Check your email");
                history("/login");
            })
            .catch((err) => {
                alert(err.code);
            });
    };

    return (
        <div className="App">
            <h1>Forgot Password</h1>
            <form onSubmit={handleSubmit}>
                <input name="email" placeholder="Enter your email" /><br /><br />
                <button type="submit">Reset</button>
            </form>
        </div>
    );
}

export default ForgotPassword;
