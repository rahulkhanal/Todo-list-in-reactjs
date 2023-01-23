import React, { useState } from 'react'
import List from './list';
import Alert from './alert'

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState(
    { 
      show: false, 
      msg: '',
      type: ''
    });

  function handleSubmit(e){
    e.preventDefault();
    
    if(!name){
      //Display alert
      showAlert(true, "Enter Something", "danger")
    }
    else if(name && isEditing){
      list.map((item, id)=>{
        if(editID === item.id){
        }
      })
    }
    else{
      const newItem = {id:new Date().getTime().toString(), title: name};
      setList([...list, newItem]);
      showAlert(true, "Item Added to List", "success")
      setName('');
    }
    // console.log(list)
  }
  const showAlert = (show, msg, type) =>{
    setAlert({show, msg, type});
  }
  function filterUs(idFromMap){
    const temp = list.filter((item, id)=>{
      return (idFromMap !== item.id);
    })
    setList(temp)
  }
  function editUs(idFromList){
    const temp = list.find((item, id)=>{
      return item.id === idFromList
    })
    setEditID(idFromList)
    setIsEditing(true);
    setName(temp.title)
  }
  return(
    <div className='container'>
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
        <div className = "form-input">
        <input type = "text" placeholder ="Write Here" value={name}
         onChange={(e)=>setName(e.target.value)}/>
        <button>{isEditing? "Edit" : "Submit"}</button>
        </div>
      </form>
      {list.length > 0 &&(
        <>
          <List items={list} 
          showAlert = {showAlert}
          filterUs ={filterUs}
          editUs = {editUs}
          />
          
          <button onClick={(()=>{
            showAlert(true, "All the Items are Deleted", "danger");
            setList([])
          })}>Clear Items</button>
        </>
      )}
    </div>
  )
}

export default App