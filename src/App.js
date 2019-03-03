import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Defaults from './components/Default';
import Cart from './components/Cart/Cart';
import ProductList from './components/ProductList';
import Modal from './components/Modal';



class App extends Component {
  render() {
    return (
       <React.Fragment>
         <Navbar/>
         <Switch>
            <Route exact path="https://phonestorebysabbir.netlify.com/" component={ProductList} />
            <Route path="https://phonestorebysabbir.netlify.com/details" component={Details} />
            <Route path="https://phonestorebysabbir.netlify.com/cart" component={Cart} />
            <Route component={Defaults} />
         </Switch>
         <Modal />
       </React.Fragment>
    );
  }
}

export default App;
