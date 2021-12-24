import React, { Component } from "react";

class Browse extends React.Component{
    constructor(props){
        super(props)
        this.state = {apiResponse:""};
    }

    render(){
        return(
            <div>
                Spooky Browse
            </div>
        );
    }
}
export default Browse;