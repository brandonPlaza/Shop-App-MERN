import React from "react";
import background from './images/loginBackground.jpeg'
import {BrowserRouter as Router, Route, Link, NavLink, Routes} from 'react-router-dom';



class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            apiResponse: "",
            name:"",
            email:"",
            password:"",
        };
        this.inputChange = this.inputChange.bind(this);
        this.submitInfo = this.submitInfo.bind(this);
    }

    inputChange(event){
        if(event.target.id === "username"){
            this.setState({name:event.target.value})
        } 
        else if(event.target.id === "email"){
            this.setState({email:event.target.value})
        }
        else if(event.target.id === "password"){
            this.setState({password:event.target.value})
        }
    }

    submitInfo(event){
        // {
        //     "userName":"Bob",
        //     "email":"bob@gmail.com",
        //     "password":"BobsPassword123"
        // }
        fetch(`http://localhost:5000/users/register`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({"userName":this.state.name, "email":this.state.email, "password":this.state.password})
        })
            .then(response => localStorage.setItem("x-access-token", response))
            .catch(err => console.error(err));

        window.location.href = "/browse"
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
                                Signup:
                            </div>
                            <form onSubmit={this.submitInfo} className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Username: 
                                        <input id="username" type="text" value={this.state.name} onChange={this.inputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                    </label>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Email: 
                                        <input id="email" className="shadow" type="email" value={this.state.email} onChange={this.inputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                    </label>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Password: 
                                        <input id="password" type="password" value={this.state.password} onChange={this.inputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between">
                                    <input className="bg-primary hover:bg-highlight text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Signup"/>
                                </div>
                            </form>
                        </div>

                        {/* Message */}
                        <div className="col-start-4 col-span-2 bg-white bg-opacity-90 py-1 px-3">
                            <h2 className="text-secondary font-bold text-2xl mb-2">Our pledge to data privacy:</h2>
                            <div className="text-highlight text-xl">
                                We will never sell any personal information input into your account. Additionally all of your information is stored according to
                                the latest cybersecurity standards.
                            </div>
                            <div className="text-highlight text-xl pt-4">
                                So you can shop and sell <span className="underline font-bold">free of worry!</span>
                            </div>
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
export default Signup;