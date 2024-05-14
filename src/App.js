import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewItem from "./components/NewItem";
import ToDoItem from "./components/ToDoItem";
import { useEffect } from "react";
import ScoreBoard from "./components/Score";

function App() {

  const [itemList,setItemList] = useState([]);
  const [taskCount,setTaskCount] = useState(0);

  function addNewItem(inputText){
    setItemList((preItems)=>{return [...preItems,inputText];})
  }

  useEffect(()=>{
    setTaskCount(()=>itemList.length)
  },[itemList]);

  function deleteItem(id){
    setItemList((prevItems)=>{
      return prevItems.filter((item,index)=>index!==id)
    })
  }

  return (
    <div className="">
      <Header />
      <NewItem addNew={addNewItem} />
      <ScoreBoard count={taskCount} />
      <div className="row">
        {itemList.map((item,index)=>{
          return <ToDoItem title={item.title} id={index} key={index} subtitle={item.subtitle} cardText={item.text} onCheck={deleteItem} />
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
