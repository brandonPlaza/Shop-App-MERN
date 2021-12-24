import React from "react";
import logo from './logo.svg';
import './App.css';

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
        <div className="bg-slate-500 shadow-md">
          <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-between">
                <div className="flex space-x-7">
                    <a href="#" className="flex items-center py-4 px-2">
                      <span className="font-bold font-mono text-blue-200 text-xl">Shop App</span>
                    </a>
                </div>

                <div className="hidden md:flex items-center space-x-1">
                    <a href="#" className="py-4 px-2 text-blue-400 border-t-4 border-blue-200 font-medium">
                        Browse
                    </a>
                    <a href="#" className="py-4 px-2 text-blue-400 border-t-4 border-blue-200 font-medium">
                        Login
                    </a>
                    <a href="#" className="py-4 px-2 text-blue-400 border-t-4 border-blue-200 font-medium">
                        Signup
                    </a>
                </div>
              </div>
          </div>
        </div>
        
      </div>
    );
  }
}
export default App;
