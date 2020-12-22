import React from 'react';
import './sign-in-and-up.styles.sass'

import SignIn from '../../components/sign-in/sign-in.component'
//We are taking this fun() component bcz no need of any stat here

const SignInAndUp = () => (
  <div class="sign-in-and-up">
    <SignIn />
  </div>
)

export default SignInAndUp;