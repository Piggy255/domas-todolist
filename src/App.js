import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Task({todo}){
  return (
    <>
      <>{todo}</><br />
      <input type="checkbox" />
    </>
  )
}

let taskId = 0;

function App() {


  const [currentTask, setCurrentTask] = useState('')
  const [tasks, setTasks] = useState([])



  return (
    <div className='App'>
      <button onClick={() => { // add task from text input with id
        setTasks([...tasks, {id: taskId, task: currentTask}])
        taskId++
        }}>Add task</button>
      <input type="text" onChange={(e) => {
        setCurrentTask(e.target.value); //update current task as it's typed
      }}/>
      <ol>
      {tasks && tasks.map((task) => ( //map out added tasks
        <li>
        <Task todo={task.task} id={task.id}/><br /> 
        <button onClick={() => {
          setTasks(
            tasks.filter(bad => bad.id !== task.id) //delete selected task by keeping everything but that task
          )
        }}>delete</button>
        </li>
      ))}
      </ol>
    </div>
  );
}

export default App;
