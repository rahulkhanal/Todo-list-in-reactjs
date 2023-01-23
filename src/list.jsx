import React from 'react'
import { BiTrash, BiEdit } from "react-icons/bi";
import './index.css'

function List({items, filterUs, showAlert, editUs}) {
  return (
    <>
    {items.map((item)=>{
        const {id ,title} = item;
        const abc = () =>{
          filterUs(id);
          showAlert(true, "Item is Deleted", "danger")
        }
        const ckk = ()=>{
          editUs(id)
        }
        return(
          <article>
            <p>{title}
            <div className="btn-icon">
              <BiTrash onClick={abc} style={{"color":"red"}}/>
              <BiEdit onClick={ckk} style={{"color":"green"}}/>
            </div>
            </p> 
          </article>
        )
    })}
    </>
  )
}

export default List