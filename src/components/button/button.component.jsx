import React from 'react';
import './button.styles.sass'

const Button = ({value, ...otherProps}) => (
  <button className="custom-button" {...otherProps}>
    {value}
  </button>
)

export default Button;