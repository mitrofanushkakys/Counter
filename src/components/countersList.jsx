import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name:'Ненужная вещь', price: '200'}, 
    { id: 1, value: 0, name: 'Ложка' }, 
    { id: 3, value: 3, name: 'Вилка' },
    { id: 4, value: 2, name: 'Тарелка' },
    { id: 5, value: 1, name: 'Набор минималиста' },
  ]

  const [counters, setCounters] = useState(initialState)

  const handleDelete = (id) => {
    const newCounters = counters.filter(c => c.id !== id)
    setCounters(newCounters)
  }

  const handleReset = () => {
    setCounters(initialState)
    console.log('handleReset')
  }

  const handleUpdate = () => {
    const updatedState = [
      { id: 0, value: 5, name:'Ненужная вещь', price: '200'}, 
      { id: 1, value: 7, name: 'Ложка' }, 
      { id: 3, value: 4, name: 'Вилка' },
      { id: 4, value: 1, name: 'Тарелка' },
      { id: 5, value: 10, name: 'Набор минималиста' },
  ]
    setCounters(updatedState)
  }

  const handleIncrement = (id) => {
    const newIncrement = counters.map(counter => {  
      return id === counter.id ? {...counter, value: counter.value += 1}
      : counter   
    })
    setCounters(newIncrement)
  }

  const handleDecrement = (id) => {
    const newDecrement = counters.map(counter => {  
      return id === counter.id ? {...counter, value: counter.value -= 1}
      : counter   
    })
    setCounters(newDecrement)
  } 

  return <>
  {counters.map((count) => ( 
  <Counter key= {count.id}  onDelete = {handleDelete} 
  onIcrement = {handleIncrement} 
  onDecrement = {handleDecrement} {...count}
  />
  ))}
  <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
  </>
}

export default CountersList