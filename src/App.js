import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shop/shop.component'; 
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          },  
          () =>{
            console.log(this.state);
          })
        
        })
      }
      this.setState({currentUser:userAuth});
      // this.setState({currentUser:user});
      
      
      // console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={Shoppage}/>
          <Route  path='/hats' component={HatsPage}/>
          <Route  path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    )
  }
}

export default App;
