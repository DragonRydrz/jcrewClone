import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Title from './components/Title';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router';
import ArrayPage from './components/ArrayPage';
// import womens from './data/womens.json';
// import mens from './data/mens.json';
// import girls from './data/girls.json';
// import boys from './data/boys.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <hr />
        <Nav />
        <hr />
        <Title />
        <Route path="/c/womens_feature/" component={ArrayPage} />
        <Route path="/c/mens_feature/" component={ArrayPage} />
        <Route path="/c/girls_feature/" component={ArrayPage} />
        <Route path="/c/boys_feature/" component={ArrayPage} />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
