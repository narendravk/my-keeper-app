import React from "react";

function ScoreBoard(props){
    return(
        <div className="text-center">
        <h3 className="badge bg-primary">Today's Pending Tasks: {props.count}</h3>
        </div>
    )
}

export default ScoreBoard;