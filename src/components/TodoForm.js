import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css' 
import SearchIcon from '@material-ui/icons/Search';
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [date,updateDate]=useState(new Date())
  const [filterDate,updateFilterDate]=useState(new Date())
  
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      date:date
    });
    setInput('');
  };

  const filter=()=>{
      props.filterTask(filterDate)
  }

  


  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
            <div>
          <label htmlFor="due" style={{color:"white",fontSize:"20px"}}>Due Date:-</label>
          <DatePicker name="due" style={{with:"20px"}} selected={date} onChange={date=>updateDate(date)}></DatePicker>
          </div>
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <div>
          <label htmlFor="due" style={{color:"white",fontSize:"20px"}}>Due Date:-</label>
          <DatePicker name="due" style={{with:"20px"}} selected={date} onChange={updateDate}></DatePicker>
          </div>
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
         
          <div className="d-flex" style={{justifyContent:'center'}}>
          <h5 style={{color:"white"}}>mm/dd/yyyy filter:-</h5>
          <DatePicker name="filter" style={{with:"20px"}} selected={filterDate} onChange={date=>updateFilterDate(date)}></DatePicker>
          <span> <button onClick={filter}  ><SearchIcon/></button></span>
          
             
          </div>

        </>
      )}
    </form>
  );
}

export default TodoForm;