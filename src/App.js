import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import '../loader.js';

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home'
import Merch from './components/Pages/Merch'
import Tour from './components/Pages/Tour'
import Contact from './components/Pages/Contact'
import Bio from './components/Pages/Bio'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'


class App extends Component {
  state = {
    sideDrawerOpen: false,
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }


  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
    backdrop = <Backdrop click={this.backdropClickHandler}/>;

     }
    return (

        <div style={{height: '100%'}} className="App">

          <Router>
            <Header drawerClickHandler={this.drawerToggleClickHandler}/>
            <SideDrawer show={this.state.sideDrawerOpen}/>
            {backdrop}
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Bio" component={Bio}/>
                <Route path="/Merch" component={Merch}/>
                <Route path="/Tour" component={Tour}/>
                <Route path="/Contact" component={Contact}/>

            </Switch>
          </Router>


          </div>

    );
  }
}


export default App;
