import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewItem from "./components/NewItem";
import ToDoItem from "./components/ToDoItem";
import { useEffect } from "react";
import ScoreBoard from "./components/Score";

var today = new Date();
try {
  var savedList = JSON.parse(localStorage.toDoList);
} catch (error) {
  console.log(error);
  savedList = [];
}

try {
   var profileImgUrl = JSON.parse(localStorage.profileImg);
} catch (error) {
  console.log(error);
  profileImgUrl = "/images/user.jpg";
}

try {
  var bgImgUrl = JSON.parse(localStorage.bgImage)
} catch (error) {
 console.log(error);
 bgImgUrl = '/images/bg1.jpg';
}
try {
  var userName = JSON.parse(localStorage.userName);
} catch (error) {
 console.log(error);
 userName = "User";
}


function App() {

  const [itemList,setItemList] = useState(savedList);
  const [taskCount,setTaskCount] = useState(savedList.length);
  const [user,setUser] = useState({name:userName,img:profileImgUrl,bg:bgImgUrl})



  function addNewItem(inputText){
    setItemList((preItems)=>{return [...preItems,inputText];})
  }

  useEffect(()=>{
    setTaskCount(()=>itemList.length)
  },[itemList]);

  useEffect(()=>{
    localStorage.setItem('toDoList',JSON.stringify(itemList))
  },[itemList]);

  useEffect(()=>{
    localStorage.setItem('userName',JSON.stringify(user.name))
  },[user.name]);

  useEffect(()=>{
    localStorage.setItem('profileImg',JSON.stringify(user.img))
  },[user.img]);

  useEffect(()=>{
    localStorage.setItem('bgImage',JSON.stringify(user.bg))
  },[user.bg]);

  function handleChangeUser(event){
    const name = event.target.name;
    const url = prompt("Enter image URL/Name :");
      setUser((preValues)=>{console.log(user);return {...preValues,[name]:url}})
    };
  
  function deleteItem(id){
    setItemList((prevItems)=>{
      return prevItems.filter((item,index)=>index!==id)
    })
  }

  return (
    <div className="bgdiv" style={{backgroundImage:`url(${user.bg})`}}>
      <Header username={user.name} ChangeName={handleChangeUser} ChangeImage={handleChangeUser} ChangeBG={handleChangeUser} />
      <NewItem addNew={addNewItem} profileImage={user.img} username={userName} />
      <ScoreBoard count={taskCount} />
      <div className="row">
        {itemList.map((item,index)=>{ console.log(item.date);
          return <ToDoItem title={item.title} subtitle={Math.round(Math.abs(today.getTime()-item.date)/(1000*60*60*24))+" days ago"} id={index} key={index} cardText={item.text} onCheck={deleteItem} />
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
