import React,{useState} from "react";

function NewItem(props){
    const [inputText,setInputText] = useState({title:"",subtitle:"",text:""});
    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setInputText((preVal)=>{return({...preVal,[name]:value})});
    }
    return(
        <div className="row text-center m-2">
            <div col-3 text-center>
            <input className="col m-2" type="text" name="title" value={inputText.title} onChange={handleChange} placeholder="Heading" />
            <input className="col m-2" type="text" name="subtitle" value={inputText.subtitle} onChange={handleChange} placeholder="Subheading" />
            <input className="col m-2" type="text"  name="text" value={inputText.text} onChange={handleChange} placeholder="Content" />
            <button className="col-2 m-2 btn btn-dark" 
            onClick={()=>{props.addNew(inputText);
                            setInputText({title:"",subtitle:"",text:""});
            }}>Add</button>
            </div>
        </div>
    )
}

export default NewItem;