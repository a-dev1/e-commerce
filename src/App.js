import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom'
import './App.css';

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
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/hats" component={HatsPage}/>        
        <Route path="/hats/:message" component={HatsPage}/>
    </div>
  );
}

export default App;
