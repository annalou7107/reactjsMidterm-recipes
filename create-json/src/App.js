import React, { Component } from 'react';
import logo from './json.png';
import './App.css';
import Createjson from './components/Createjson'
import Home from './components/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <Navigation />
      </div>
    );
  }
}

class AppHeader extends Component{
    render(){
        return(
         <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to the JSON creator<br></br></h1>
        </div>
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
                    <NavItem href="/createjson">Createjson</NavItem>
                    </Nav>
            </Navbar>
            
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/createjson" component={Createjson}/>
                </Switch>
            </Router>
        </div>
        );
    }
}



export default App;
