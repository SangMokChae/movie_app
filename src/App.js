import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} /> 
    <Route path="/about" component={About} />
    <Route path="/movie/:id" component={Detail} />
  </HashRouter>
  //Link를 사용하고 있다면 Router안에 넣어야 한다.
  );
}

export default App;