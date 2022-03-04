import React from "react";

export default function Task({name, done, id, onCheckHandler, deleteHandler}) {
  
  return (
    <div className={"todo-item " + (done ? 'complete' : '')}>
      <div className="checker">
        <span className="">
          <input type="checkbox" 
          checked={done} 
          onChange={e => onCheckHandler(id, e.target.checked)} />
        </span>
      </div>
      <span>{name}</span>

      <button
      onClick={()=> deleteHandler(id)} 
      className="btn btn-danger">Delete</button>
    </div>
  );
}




