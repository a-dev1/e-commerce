import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndUp from './pages/sing-in-and-up/sign-in-and-up.component'
import Header from './components/header/header.component'
import { auth } from "./firebase/firebase.utils";

// const HatsPage = (props) => {
//   console.log('props from hatpage:', props)
//   return(
//     <div>
//       <h1>HATS {props.match.params.message}</h1>
//     </div>
//   )
// }

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    //generally fetch data here
    //Whenever sign in or out we want to be aware without actually manually fetch & firebase give us this functionality
    //it is an open subscription which get automatically updated when user sign in or out with any of the services.
    //onAuthStateChange(userState => { //something important})

    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){  
    return (
      <div>
        {/** When a route path matches inside switch it doesn't render further */}
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>        
          {/* <Route path="/hats/:message" component={HatsPage}/> */}
          <Route exact path="/signin" component={SignInAndUp} />
        </Switch>
      </div>
    );
  }

}

export default App;
