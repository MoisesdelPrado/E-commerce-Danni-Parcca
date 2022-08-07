import React, { useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { Header } from '../../components/Header';

const Login: NextPage = () => {
  
  const [boxChecked, setBoxChecked] = useState(false);

  return (
    <div className="flex flex-col mx-auto my-auto">
      <Header />
      <div className="flex flex-col gap-5 mt-36 mx-auto text-lg">
        <form action="/createUser" method="POST" className="flex flex-col gap-5">
        <h1>Login</h1>
        <hr />

          <input type="email" placeholder="Email" name="email" required />
          <hr />

          <input type="password" placeholder="Enter Password" name="newPassword" required />
          <hr />

          <label>
            <input type="checkbox" checked={boxChecked} name="remember" onClick={() => {setBoxChecked(!boxChecked)}} /> Remember me
          </label>

      <p><Link href="./forgot">Forgot password?</Link></p>
      <p>Don't have an account yet?</p>
      <p><Link href="./signup">Sign up for an account now</Link></p>

          <div className="flex flex-row gap-5">
            <button type="submit" className="bg-black border-2" >Login</button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default Login;