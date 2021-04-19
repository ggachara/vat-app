import { useState, useEffect } from "react"
import  Tasks  from "./components/Tasks";
import  Header  from "./components/Header";
import  AddTask  from "./components/Addtask";

function App() {

  const [showAdd, setShowAdd] = useState(true)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }

    getTasks()
  }, [])

//Fetch Task

const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()

  return data
}
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()

  return data
}
//Add Task

  const addTask = async (task) => {

    const res = await fetch('http://localhost:5000/tasks', {method: 'POST', headers: {
      'Content-type': 'application/json'
    }, body: JSON.stringify(task)})

    const data = await res.json()

    setTasks([...tasks, data])
      // const id = Math.floor(Math.random() * 10000) + 1 
      // const newTask = { id, ...task}

      // setTasks([...tasks, newTask])
  }
  const deleteTask = async (id) => {
      
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE', })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = async (id) => {

    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {method: 'PUT', headers: {'Content-type': 'application/json'}, body: JSON.stringify(updTask)})
    const data = await res.json()

    setTasks(
        tasks.map((task) => 
        task.id === id ? { ...task, reminder: !task.reminder } : task
         )
      )
  }

  return (
    <div className="big-container">
      <div className="container">
      <Header onBtn={() => setShowAdd(!showAdd)} showAdd={showAdd} title={"VAT TRACKER"}/>
      {showAdd && <AddTask onAdd={addTask}/>}
      </div>
      <div className="container">
      <Header onBtn={() => setShowAdd(!showAdd)} showAdd={showAdd} title={"VAT RECORDS"}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'Show nothing here!!!'}
      </div>
    </div>
  );
}

export default App;
