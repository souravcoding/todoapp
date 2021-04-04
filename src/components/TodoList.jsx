import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import 'react-datepicker/dist/react-datepicker.css' 
import DateFilter from '../DateFilter';
import MonthFilter from './MonthFilter';
import YearFilter from './YearFilter';


function TodoList() {
    const [date,updateDate]=useState(new Date())
    const [sort,updateSort]=useState('Newest')
    const [month,setMonth]=useState('')
    const [year,setYear]=useState('')
    const [day,setDay]=useState('')

  const [todos, setTodos] = useState([]);



  const addTodo = todo => {
      
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
   
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const filterfunc=(filterdate)=>{
     console.log(filterdate.getDay());
    const filterArr = [...todos].filter(todo => `${todo.date.getDay()}-${todo.date.getMonth()}-${todo.date.getFullYear()}` === `${filterdate.getDay()}-${filterdate.getMonth()}-${filterdate.getFullYear()}`);
     
    setTodos(filterArr);
  }
  const sortArray=(e)=>{
    updateSort(e.target.value)
    todos.reverse()
  }

   const updateMonth=(e)=>{
     setMonth(e.target.value)
     if(e.target.value!==""){
     const filterArr = todos.filter((items)=>{
      
       return (items.date.getMonth()+1)==e.target.value
     })
    
     setTodos(filterArr);
    }
   }

   const updateYear=(e)=>{
    setYear(e.target.value)
    if(e.target.value){
    const filterArr = todos.filter((items)=>{
        return (items.date.getFullYear())==e.target.value
    })
    
    setTodos(filterArr);
  }
  }

 const getWeek=( d )=> { 

    var target  = new Date(d.valueOf());  
    var dayNr   = (d.getDay() + 6) % 7;  
    target.setDate(target.getDate() - dayNr + 3);  
    var jan4    = new Date(target.getFullYear(), 0, 4);    
    var dayDiff = (target - jan4) / 86400000;    
    var weekNr = 1 + Math.ceil(dayDiff / 7);    
  
    return weekNr;    
  
  }

  const updateDay=(e)=>{
    setDay(e.target.value)
    if(e.target.value){
      const filterArr = todos.filter((items)=>{
      console.log(getWeek(items.date));
        return (getWeek(items.date))==e.target.value
          
      })
      
      setTodos(filterArr);
    }
    
  }
  

  return (
    <>
      <h1>Notes For Important Events</h1>
      <TodoForm onSubmit={addTodo} filterTask={filterfunc} />
      
      {todos.length ? <>
        <div className='sortDiv'>
        <h5>Sort Item:-</h5>
       <select className='sort' value={sort} onChange={sortArray}  id="sorting" name="sortdata">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
          </div>
          <div className="datepicker">
         <MonthFilter month={month} updateMonth={updateMonth}></MonthFilter>
        <YearFilter year={year} updateYear={updateYear}></YearFilter>
          <div className="day">
          <DateFilter day={day} changeDay={updateDay}></DateFilter>
          </div>
        </div> </>
        : <h3 style={{color:'white', marginTop:'20px'}}>No Item In List.....</h3>
        }  
             
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;