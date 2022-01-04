import React from "react";
import background from './images/loginBackground.jpeg'

class Login extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        apiResponse: "",
        email:"",
        password:"",
    };
    this.inputChange = this.inputChange.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
  }

  inputChange(event){
    if(event.target.id === "email"){
        this.setState({email:event.target.value})
    }
    else if(event.target.id === "password"){
        this.setState({password:event.target.value})
    }
}

  submitInfo(event){
    event.preventDefault();
    fetch(`http://localhost:5000/users/login`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({"email":this.state.email, "password":this.state.password})
      })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("token", data.token);
            window.location.href = "/browse";
        })
        .catch(err => console.error(err));
  }

  render(){
      return(
          <div>
            {/* Top Bar */}
            <div className="bg-highlight shadow-md">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex justify-between">
                            <div className="flex space-x-5">
                                <a href="/" className="flex items-center py-4">
                                    <span className="font-bold font-mono text-primary text-3xl">Shoplux</span>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>

            {/* Main Section */}
                <div className="w-full relative center">
                    <div className="w-full h-full absolute top-0 left-0 grid grid-cols-6">
                        {/* Form */}
                        <div className="col-start-2 col-span-2 bg-white bg-opacity-90 py-1 px-3">
                            <div className="font-bold text-3xl mb-7 text-primary">
                                Login:
                            </div>
                            <form onSubmit={this.submitInfo} className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Email: 
                                        <input id="email" type="text" value={this.state.email} onChange={this.inputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Password: 
                                        <input id="password" type="password" value={this.state.password} onChange={this.inputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between">
                                    <input className="bg-primary hover:bg-highlight text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Submit"/>

                                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                        Forgot Password?
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <img src={background} alt="Background" className="object-cover w-full"/>
                </div>

                {/* Footer */}
                <div className="flex bg-highlight h-screen">
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
export default Login;

// export default function Login(){
//   return(
//       <div>
//         Spooky View
//       </div>
//   );
// }
