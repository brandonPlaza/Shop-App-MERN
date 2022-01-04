import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link, NavLink, Routes} from 'react-router-dom';

class Browse extends React.Component{
    constructor(props){
        super(props)
        this.state = {apiResponse:""};
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

                            <div className="hidden md:flex items-center space-x-1">
                                <nav>
                                    <Link className="py-4 px-2 text-tertiary border-b-4 border-primary font-medium m-2" to="account">Account</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Browse;