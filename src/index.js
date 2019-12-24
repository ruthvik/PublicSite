import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Home from "./components/Home";
import About from "./components/About";
import HomeItem from "./components/HomeItem";
import Details from "./components/Details";
import { UserContext } from "./components/UserContext";
import Blog from "./components/Blog";
import Schedule from "./components/Schedule";
import Header from "./components/Header";

const routing = (
  <Router>
    <div>
      <Header />
      <div>
        <Route path="/" component={App} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Home/:id" component={HomeItem} />
        <UserContext.Provider value="Hello from context">
          <Route path="/About" component={About} />
          <Route path="/Details" component={Details} />
        </UserContext.Provider>
        <Route path="/Blog" exact component={Blog} />
        <Route path="/Schedule" exact component={Schedule} />
        <Route path="/Blog/:id" component={HomeItem} />
    </div>
  </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
