import React from "react";
function ToDoItem(props){
    return(
        <div className="card col-lg-2 col-md-3 col-sm-6 m-3 bg-primary" style={{width:"14rem"}}>
            <div className="card-body">
                <h4 className="card-title text-warning">{props.title}</h4>
                <h6 className="card-subtitle text-info">{props.subtitle}</h6>
                <p className="card-text text-light">{props.cardText}</p>
                
            </div>
            <div className="text-end">
            <button className="btn" onClick={(e)=>{props.onCheck(props.id);e.target.checked=false;}}>✅</button>
            </div>
        </div>
    )
}

export default ToDoItem;