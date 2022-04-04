import React from 'react';
import { useSelector } from 'react-redux';

function SignUp() {
  const username = useSelector(state => state.signUp.username)

  return (
    <div className="App">
      {`bla, ${username}`}
    </div>
  );
}

export default SignUp;