import React from 'react';
import { NextPage } from 'next';

const forgot: NextPage = () => {
  return (
    <div>
        <form action="/" method="POST">
            <input type="text" placeholder="Enter your registered email"></input>
            <button type="submit">Submit recovery</button>
        </form>
    </div>
  )
};

export default forgot;