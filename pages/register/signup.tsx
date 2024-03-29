import React, { useState } from 'react';
import { NextPage } from 'next';
import { Header } from '../../components/Header';

const Signup: NextPage = () => {
  
  const [boxChecked, setBoxChecked] = useState(false);

  return (
    <div className="flex flex-col mx-auto my-auto">
      <Header />
      <div className="flex flex-col gap-5 mt-36 mx-auto text-lg">
        <form action="/createUser" method="POST" className="flex flex-col gap-5">
        <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <input type="text" placeholder="First Name" name="firstName" required />
          <hr />

          <input type="text" placeholder="Last Name" name="lastName" required />
          <hr />

          <input type="email" placeholder="Email" name="email" required />
          <hr />

          <input type="text" placeholder="Phone Number (Optional)" name="phone" />
          <hr />

          <input type="password" placeholder="Enter Password" name="newPassword" required />
          <hr />

          <input type="password" placeholder="Repeat Password" name="repeatPassword" required />
          <hr />

          <label>
            <input type="checkbox" checked={boxChecked} name="remember" onClick={() => {setBoxChecked(!boxChecked)}} /> Remember me
          </label>

      <p>By creating an account you agree to our <a href="#">Terms and Privacy</a>.</p>

          <div className="flex flex-row gap-5">
            <button type="button" className="bg-white border-2" >Cancel</button>
            <button type="submit" className="bg-black text-white border-2" >Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default Signup;