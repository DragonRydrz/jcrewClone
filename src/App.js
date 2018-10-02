import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Title from './components/Title';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router';
import ArrayPage from './components/ArrayPage';
import womens from './data/womens.json';
import mens from './data/mens.json';
import girls from './data/girls.json';
import boys from './data/boys.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <hr />
        <Nav />
        <hr />
        <Title />
        <Switch>
          <Route
            path="/c/womens_feature/"
            component={props => <ArrayPage {...props} data={womens} />}
          />
          <Route
            path="/c/mens_feature/"
            component={props => <ArrayPage {...props} data={mens} />}
          />
          <Route
            path="/c/girls_feature/"
            component={props => <ArrayPage {...props} data={girls} />}
          />
          <Route
            path="/c/boys_feature/"
            component={props => <ArrayPage {...props} data={boys} />}
          />
        </Switch>
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
