import React from "react";

//always extend to the react component to create the components
export default class ReplyButton extends React.Component {
    //this defines what the component will look like or what the HTML will display to the screen
    render() {
        return <button className="btn btn primary">Reply</button>
    }
}