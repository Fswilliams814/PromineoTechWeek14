import React from "react";
import StarRating from "./star-rating";


export default class MovieData extends React.Component {
    render(){
        return (
            <div className="card w-75" id='movieCard'>
            <div className="card-header bg-success text white" id='movieTitle'>Movie Title</div>
            <div className="card-body" id='movieImage'>Movie Image</div>
            <div className="card-footer">
               <StarRating/>
            </div>
        </div>
        );
    }
}