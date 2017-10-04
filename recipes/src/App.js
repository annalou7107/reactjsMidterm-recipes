import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Recipes from './components/Recipes'
import Home from './components/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <AppHeader/>
        <AppInfo />
        <Navigation />
      </div>
    );
  }
}

class AppHeader extends Component{
    render(){
        return(
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Recipes collector</h1>
        </header>
        )
    }
}

class AppInfo extends Component{
    render(){
        return(       
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        )
    }
}

class Navigation extends Component{
    render(){
     return(
        <div>
            <Navbar>
                <Nav>
                    <NavItem href = "/">Home</NavItem>
                    <NavItem href="/Recipes">Recipes</NavItem>
                    </Nav>
            </Navbar>
            
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Recipes" component={Recipes}/>
                </Switch>
            </Router>
        </div>
        );
    }
}
export default App;
