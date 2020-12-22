import React from 'react';
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

    this.setState({ [name]: value })
  }


  render() {
    return (
      <div className="sign-in">

        <h1>I already have an account</h1>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required />
          <label>password</label>

          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required />

          <input type="Submit" value="sign in" />
        </form>

      </div>
    );
  }
}

export default SignIn;