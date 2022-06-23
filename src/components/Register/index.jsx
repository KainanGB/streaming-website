import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaGoogle } from "react-icons/fa";

import { signInWithGoogle } from "../../server/firebase";
import { useAuth } from "../../hooks/useAuth";

import "./Register.Style.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const { user, loading, error, fetchUserName, createUserWithEmail } =
    useAuth();

  const navigate = useNavigate();

  const register = () => {
    if (!userName) alert("Please enter name");
    createUserWithEmail(userName, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          <FaGoogle />
        </button>
        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Register;
