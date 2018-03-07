import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
 

//for history of router 
import {createBrowserHistory} from 'history';
const history = createBrowserHistory();




// CONTAINERS
import Full from '../containers/Full/'

// COMPONENTS
import Login from '../views/Pages/Login/'
import Register from '../views/Pages/Register/'
import Page404 from '../views/Pages/Page404/'
import Page500 from '../views/Pages/Page500/'


 

class App extends Component {
  render() {
    return (
			<BrowserRouter history={history}>
				<Switch>
				  <Route exact path="/login" name="Login Page" component={Login}/>
				  <Route exact path="/register" name="Register Page" component={Register}/>
				  <Route exact path="/404" name="Page 404" component={Page404}/>
				  <Route exact path="/500" name="Page 500" component={Page500}/>
				  <Route path="/" name="Home" component={Full}/>
				</Switch>
			</BrowserRouter>
    );
  }
}

export default App;
