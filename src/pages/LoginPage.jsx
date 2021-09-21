import React from "react";

const LoginPage = () => {
  return (
    <div className="form">
      <input type="text" placeholder="Enter the name.." />
      <input type="email" placeholder="Enter the email.." />
      <button type="submit">Submit</button>
    </div>
  );
};

export default LoginPage;
