import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInAndUp from './pages/sing-in-and-up/sign-in-and-up.component'

const HatsPage = (props) => {
  console.log('props from hatpage:', props)
  return(
    <div>
      <h1>HATS {props.match.params.message}</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      {/** When a route path matches inside switch it doesn't render further */}
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>        
        <Route path="/hats/:message" component={HatsPage}/>
        <Route exact path="/signin" component={SignInAndUp} />
      </Switch>
    </div>
  );
}

export default App;
