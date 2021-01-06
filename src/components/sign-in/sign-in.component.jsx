import React from 'react';

import FormInput from '../form-input/form-input.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import Button from '../button/button.component';
import './sign-in.styles.sass';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }


  render() {
    return (
      <div className="sign-in">

        <h1>I already have an account</h1>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
            required />

          <div className="button-container">
            <Button value="Sign in" />
            <Button onClick={signInWithGoogle} value="Sign in with google" isGoogleSignIn />
          </div>

        </form>

      </div>
    );
  }
}

export default SignIn;