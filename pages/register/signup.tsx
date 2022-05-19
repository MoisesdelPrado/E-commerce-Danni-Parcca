import React from 'react';

const signup = () => {
  return (
    <div>
      <form action="/createUser" method="POST">
      <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <label htmlFor="newUserName"><b>Email</b></label>
        <input type="text" placeholder="Enter Username" name="newUsername" required />

        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="newPassword" required />

        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="repeatPassword" required />

        <label>
          <input type="checkbox" checked={true} name="remember" /> Remember me
        </label>

    <p>By creating an account you agree to our <a href="#">Terms and Privacy</a>.</p>

        <div>
          <button type="button">Cancel</button>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  )
};

export default signup;