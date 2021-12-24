import React from "react";
import logo from './logo.svg';
import background from './images/frontPageImage.jpeg'
import './App.css';

import {BrowserRouter as Router, Route, Link, NavLink, Routes} from 'react-router-dom';
import Login from "./Login";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse:""};
  }

  callAPI(){
    fetch("http://localhost:5000/api")
      .then(res => res.text())
      .then(res => this.setState({apiResponse:res}))
  }

  componentWillMount(){
    this.callAPI();
  }


render() {
    return (
        <div>
          <div className="bg-highlight shadow-md">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between">
                  <div className="flex space-x-5">
                      <a href="/" className="flex items-center py-4">
                        <span className="font-bold font-mono text-primary text-3xl">Shoplux</span>
                      </a>
                  </div>

                  <div className="hidden md:flex items-center space-x-1">
                      <a href="#" className="py-4 px-2 text-tertiary border-b-4 border-primary font-medium">
                          Browse
                      </a>
                      <nav>
                        <Link to="login">Login</Link>
                      </nav>
                      <a href="#" className="py-4 px-2 text-tertiary border-b-4 border-primary font-medium">
                          Signup
                      </a>
                  </div>
                </div>
            </div>
          </div>

          <div className="w-full relative center">
            <div className="w-full h-full absolute top-0 left-0 grid grid-cols-7">
              <div className="col-span-4"></div>
              <div className="col-span-3 bg-white bg-opacity-40 py-1 px-3">
                <h2 className="text-4xl pb-4 text-secondary">
                  Welcome to <span className="font-bold">Shoplux!</span>
                </h2>
                <div className="text-highlight text-xl">
                  Shoplux is your one stop shop in your shopping endevours. Not only do we have reputable vendours around the world
                  creating product listings, you can also buy from other user listings!
                </div>

                <div className="text-highlight text-xl pt-4">
                  This makes Shoplux both a market for consumers and a network for entrepreneurs around the world to publish their products.
                  Create an account today to start shopping and selling!
                </div>
              </div>
            </div>
            <img src={background} alt="Background" className="object-cover w-full"/>
          </div>

          <div className="flex bg-highlight h-full">
              <div className="p-3">
                <span className="text-primary">Connect with us:</span>
                  <ul>
                    <li>
                      <a href="#" className="font-mono font-semibold text-tertiary">Twitter</a>
                    </li>
                    <li>
                      <a href="#" className="font-mono font-semibold text-tertiary">Facebook</a>
                    </li>
                    <li>
                      <a href="#" className="font-mono font-semibold text-tertiary">Instagram</a>
                    </li>
                    <li>
                      <a href="#" className="font-mono font-semibold text-tertiary">Reddit</a>
                    </li>
                  </ul>
              </div>
          </div>
        </div>
    );
  }
}
export default App;
