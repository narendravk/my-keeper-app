import React,{useState} from "react";

function NewItem(props){
    const [inputText,setInputText] = useState({title:"",subtitle:"",text:""});
    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setInputText((preVal)=>{return({...preVal,[name]:value})});
    }
    return(
        <div className="card mx-auto my-1" style={{width:"18rem"}}>
            <div className="card-header text-center bg-warning">
                Add New
            </div>
            <div text-center className="card-body">
            <input className="" type="text" name="title" value={inputText.title} onChange={handleChange} placeholder="Heading" />
            <input className="" type="text" name="subtitle" value={inputText.subtitle} onChange={handleChange} placeholder="Subheading" />
            <input className="" type="text"  name="text" value={inputText.text} onChange={handleChange} placeholder="Content" />
            <button className="btn btn-outline-warning" 
            onClick={()=>{props.addNew(inputText);
                            setInputText({title:"",subtitle:"",text:""});
            }}>📌</button>
            </div>
        </div>
    )
}

export default NewItem;