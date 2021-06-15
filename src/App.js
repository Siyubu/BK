import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import SneakersList from './components/sneakersList'
import SneakerDetail from './components/sneakerDetail'
import Cart from './components/cart'
import ErrorBoundary from './components/errorBoundary'
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <div className="App-header">
          <h1>Sneaker city challenge</h1>
          <h6>Prepared by: Bank Of Kigali</h6>
          <h6>done by: Solange Iyubu</h6>
        </div>
        <Switch>
        <Route exact path="/" render={() => <Redirect to="/sneaker_list" from="/" />} />
          <Route exact path="/sneaker_list" component={SneakersList} />
          <Route exact path="/sneaker/:name" component={SneakerDetail } />
          <Route exact path="/cart" component={Cart} />
          <Route component={ErrorBoundary } />
        </Switch>
      </div>
     
    </Router>
  );
}

export default App;
