import React,{useState} from "react";

function NewItem(props){
    const [inputText,setInputText] = useState({title:"",text:"",date:""});

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setInputText((preVal)=>{return({...preVal,[name]:value,date:new Date().getTime()})});
    }
    return(
        <div className="row">

            <div className="col-lg-6 col-md-6 col-sm-1">
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
        </div>
        <div className="searchbox col-lg-6 col-md-6 col-sm-1">
            <form action="https://www.google.com/search" method="get" name="searchform" target="_blank">
                <div>
                <img src = "/images/google.png" alt="Google" width="200px" />
                </div>
            <input name="sitesearch" type="hidden" value="" />
            <input autocomplete="on" name="q" placeholder="Search here" required="required"  type="text" />
            <div>
            <button className="btn btn-warning btn-sm my-2" type="submit">Search</button>
            </div>
            </form>
        </div>
        </div>
    )
}

export default NewItem;