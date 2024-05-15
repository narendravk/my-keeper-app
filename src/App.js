import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewItem from "./components/NewItem";
import ToDoItem from "./components/ToDoItem";
import { useEffect } from "react";
import ScoreBoard from "./components/Score";

try {
  var savedList = JSON.parse(localStorage.toDoList);
  console.log(savedList);
} catch (error) {
  console.log(error);
  savedList = [];
}


function App() {

  const [itemList,setItemList] = useState(savedList);
  const [taskCount,setTaskCount] = useState(savedList.length);

  function addNewItem(inputText){
    setItemList((preItems)=>{return [...preItems,inputText];})
  }

  useEffect(()=>{
    setTaskCount(()=>itemList.length)
  },[itemList]);

  useEffect(()=>{
    localStorage.setItem('toDoList',JSON.stringify(itemList))
  },[itemList]);

  function deleteItem(id){
    setItemList((prevItems)=>{
      return prevItems.filter((item,index)=>index!==id)
    })
  }

  return (
    <div className="">
      <Header />
      <div className="text-center">
      
      </div>
      <NewItem addNew={addNewItem} />
      <ScoreBoard count={taskCount} />
      <div className="row">
        {itemList.map((item,index)=>{
          return <ToDoItem title={item.title} id={index} key={index} cardText={item.text} onCheck={deleteItem} />
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
