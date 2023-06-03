import React from "react";

function LoginMessage() {
  return (
    <div style={{ textAlign: "center", marginTop: "12rem" }}>
      <h3>Please Login</h3>
      <p>Please login to access the cart</p>
      <button
        className="btn btn-primary"
        style={{
          border: "none",
          padding: "0.8rem 7rem",
          borderRadius: "5px",
        }}
      >
        Login
      </button>
    </div>
  );
}

export default LoginMessage;
