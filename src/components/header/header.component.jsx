import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import './header.styles.sass'

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to='/' className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to='/'>
        HOME
      </Link>
      <Link className="option" to='/shop'>
        SHOP
      </Link>
      {
        currentUser ?
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className="option" to='/signin'>
            LOGIN
          </Link>
      }
    </div>
  </div>
)

export default Header;