import React,{useState} from "react";

function NewItem(props){
    const [inputText,setInputText] = useState({title:"",text:"",date:new Date().getTime()});

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setInputText((preVal)=>{return({...preVal,[name]:value})});
    }
    return(
        <div className="card mx-auto my-1" style={{width:"18rem"}}>
            <div className="col text-center">
            <img className="rounded-circle" src={props.profileImage} width="100px" alt={props.username} />
            </div>
            <div className= "card-header text-center bg-warning">Add New Task</div>
            <div className="card-body">
            <input className="" type="text" name="title" value={inputText.title} onChange={handleChange} placeholder="Title" />
            <input className="" type="text" name="text" value={inputText.text} onChange={handleChange} placeholder="Details" />

            <button className="btn btn-outline-dark rounded-pill" 
            onClick={()=>{props.addNew(inputText);
                            setInputText({title:"",text:""});
            }}>📌</button>
            </div>
        </div>
    )
}

export default NewItem;