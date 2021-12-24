import React from "react";
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
        alert(`${this.state.name} ${this.state.email} ${this.state.password}`)
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

                <div className="w-full h-full grid grid-cols-6 relative center">
                    <div className="h-full col-start-3 col-span-2">
                        <div className="w-full align-middle">
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
                                        <input id="email" className="shadow" type="text" value={this.state.email} onChange={this.inputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                    </label>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Password: 
                                        <input id="password" type="text" value={this.state.password} onChange={this.inputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                    </label>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Signup;