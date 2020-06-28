import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shop/shop.component'; 
import Header from './components/header/header.component';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={Shoppage}/>
        <Route  path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
