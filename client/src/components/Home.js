import React from "react";
import FromIoT from "./FormIoT";
import '../style/Home.css';

class Home extends React.Component{
    render(){
        return (
            <div className = "home">
                <FromIoT/>
            </div>
        );
    }
}

export default Home;
