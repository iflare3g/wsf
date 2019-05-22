import React from "react";

export default ({ children }) => (
  <div
    style={{
      margin: `3rem auto`,
      maxWidth: '60%',
      padding: `0 1rem`,
      textAlign: "center",
      height: '100vh',
      display: "grid",
      justifyContent: "space-around",
    }}
  >
    {children}
  </div>
);
