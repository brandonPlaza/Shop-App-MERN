import React from "react";
import {BrowserRouter as Router, Route, Link, NavLink, Routes} from 'react-router-dom';


class Account extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                {/* Top Bar */}
                <div className="bg-highlight shadow-md">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex justify-between">
                            <div className="flex space-x-5">
                                <a href="/browse" className="flex items-center py-4">
                                    <span className="font-bold font-mono text-primary text-3xl">Shoplux</span>
                                </a>
                            </div>

                            <div className="hidden md:flex items-center space-x-1">
                                <nav>
                                    {/* <Link className="py-4 px-2 text-tertiary border-b-4 border-primary font-medium m-2" to="signup">Signup</Link> */}
                                    <a href="#" className="py-4 px-2 text-tertiary border-b-4 border-primary font-medium m-2">Signout</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-6">
                    {/* Sidebar */}
                    <div className="h-full w-full col-span-1 flex">
                        <div className="flex-col h-full">
                            <div className="mx-5 mb-8 mt-5 h-2/6">
                                <span className="font-semibold text-2xl text-tertiary">Account</span>
                                <ul className="list-none list-inside mt-3">
                                    <li className="list-item mb-3 pl-5">
                                        Update Password
                                    </li>
                                    <li className="list-item mb-3 pl-5">
                                        Two Factor Authentication
                                    </li>
                                    <li className="list-item mb-3 pl-5">
                                        Security Questions
                                    </li>
                                    <li className="list-item mb-3 pl-5">
                                        Recovery Email
                                    </li>
                                </ul>
                            </div>
                            <div className="mx-5 h-2/6">
                                <span className="font-semibold text-2xl text-tertiary">Security</span>
                                <ul className="list-none list-inside mt-3">
                                    <li className="list-item mb-3 pl-5">
                                        Two Factor Authentication
                                    </li>
                                    <li className="list-item mb-3 pl-5">
                                        Security Questions
                                    </li>
                                    <li className="list-item mb-3 pl-5">
                                        Recovery Email
                                    </li>
                                </ul>
                            </div>
                            <div className="m-5 h-2/6">
                                <span className="font-semibold text-2xl text-tertiary">Manage Merchandise</span>
                                <ul className="list-none list-inside mt-3">
                                    <li className="list-item mb-3 pl-5">
                                        Listed Products
                                    </li>
                                    <li className="list-item mb-3 pl-5">
                                        Sales Report
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="h-full w-full col-span-4">
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Account;