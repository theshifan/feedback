import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css"



const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [conditionsAgreed, setConditionsAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!conditionsAgreed) {
      setError("You must agree to the Terms & Conditions");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/signup/", {
        username,
        email,
        password,
      });

      // Save tokens and user info
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/login"); 
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div className="container-1">
        <div className="left">
          <div className="overlay-text">
            <h2>give your review,</h2>
            <h2>let us create better</h2>
          </div>
        </div>

        <div className="right">
          <div className="form-container">
            <h1>Create an account</h1>
            <p>
              Already have an account? <a href="/login">Log in</a>
            </p>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className="name-fields">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  required
                />
              </div>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
              />

              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={conditionsAgreed}
                  onChange={() => setConditionsAgreed(!conditionsAgreed)}
                />
                I agree to the <a href="#">Terms & Conditions</a>
              </label>

              <button type="submit" disabled={loading}>
                {loading ? "Creating account..." : "Create account"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
