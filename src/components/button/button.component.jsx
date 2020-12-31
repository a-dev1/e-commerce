import React from 'react';
import './button.styles.sass'

const Button = ({ value, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {value}
  </button>
)

export default Button;