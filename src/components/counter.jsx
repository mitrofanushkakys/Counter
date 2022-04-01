import React, {useState} from "react"

const Counter = (props) => {
  const { value } = props

  const formatValue = () => {
    return value === 0 ? <h1>empty</h1> : <h1>{value}</h1>
  }
  const getBageClasses= () => {
    let classes = 'badge m-2 '
    classes+= value===0?'bg-warning':'bg-primary'
    return classes
  }

  return (
    <div>
      <span><b>{props.name}</b></span>
      <span className={getBageClasses()}>{formatValue()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={() => props.onIcrement(props.id)}>+</button>
      <button className="btn btn-primary btn-sm m-2" onClick={() => props.onDecrement(props.id)}>-</button>
      <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
  ) 
}

export default Counter