import Input from "../common/Input";
import Button from "../common/Button";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Login submitted!");

    window.location.href = "/dashboard";
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1>🕌 Ziyaarah</h1>
          <p>Your Spiritual Journey Companion</p>
        </div>

        <div className="form-header">
          <h2>Welcome Back</h2>
          <p>Continue your spiritual journey with us.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
          />

          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
          />

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>

            <a href="/forgot-password">Forgot Password?</a>
          </div>

          <Button type="submit">Sign In</Button>
        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <a
            href="/register"
            onClick={() => (window.location.href = "/register")}
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;