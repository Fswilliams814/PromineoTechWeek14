import React from "react";
import Post from "./post";



export default class Newsfeed extends React.Component {
    render(){
        return (
        <div className="container">
            <Post/>
            <Post/>
            <Post/>
        </div>
        );
    }
}