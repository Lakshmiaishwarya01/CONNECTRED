import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { verifyUserCredentials } from "../firebase/auth";
import { useAuth } from "../contexts/authContexts";

export const Login = () => {
    const { setUserLoggedIn, setHospitalName } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (email && password) {
            try {
                const { hospitalName } = await verifyUserCredentials(email, Number(password));
                setUserLoggedIn(true);
                setHospitalName(hospitalName);
                navigate('/requirement');
            } catch (error) {
                console.error("Login failed:", error.message);
                alert("Login failed. Please check your credentials.");
            }
        } else {
            alert("All fields are required.");
        }
    };

    return (
        <div className="loginpage">
            <div className="div">
                <div className="connectred-wrapper">
                    <p className="connectred">connectred</p>
                    <p className="hospital">.hospital</p>
                </div>
                <div className="overlap">
                    <p className="p">connectred</p>
                    <div className="group-wrapper">
                        <div className="overlap-wrapper">
                            <div className="overlap-group">
                                <div className="text-wrapper-5">Login</div>
                                <div className="group-2">
                                    <div className="group-3">
                                        <div className="text-wrapper-6">Organization email</div>
                                        <div className="overlap-group-wrapper">
                                            <div className="overlap-group-2">
                                                <div className="text-wrapper-7">Enter email</div>
                                                <input
                                                    type="text"
                                                    className="rectangle"
                                                    placeholder="Enter email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-wrapper">
                                        <button className="overlap-2" onClick={handleLogin}>
                                            <div className="text-wrapper-8">Log In</div>
                                        </button>
                                    </div>
                                    <div className="group-4">
                                        <div className="group-5">
                                            <div className="text-wrapper-6">Password</div>
                                            <div className="overlap-group-wrapper">
                                                <div className="overlap-group-2">
                                                    <div className="text-wrapper-9">Enter password</div>
                                                    <input
                                                        type="password"
                                                        className="rectangle"
                                                        placeholder="Enter password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
