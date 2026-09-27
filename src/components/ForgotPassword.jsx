import Input from "./common/Input";
import Button from "./common/Button";
import { useState } from "react";

function ForgotPassword() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();

    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Password reset instructions have been sent to your email.");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1>🕌 Ziyaarah</h1>
          <p>Your Spiritual Journey Companion</p>
        </div>

        <div className="form-header">
          <h2>Forgot Password?</h2>
          <p>Enter your email to reset your password.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            name="email"
            placeholder="Enter your email"
            type="email"
          />

          {message && <p className="form-error">{message}</p>}

          <Button type="submit">Reset Password</Button>
        </form>

        <p className="auth-switch">
          Remember your password?{" "}
          <a href="/login">Back to Login</a>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
