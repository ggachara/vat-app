import { useState } from "react"
import  Tasks  from "./components/Tasks";
import  Header  from "./components/Header";
import  AddTask  from "./components/Addtask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 14 2020',
      reminder: 'true'
    },
    {
      id: 2,
      text: 'Nurses Appointment',
      day: 'Feb 15 2020',
      reminder: 'true'
    },
    {
      id: 3,
      text: 'Whole Hospitals Appointment',
      day: 'Feb 2020',
      reminder: 'true'
    },
  ])
//Add Task

  const addTask = (task) => {
      console.log(task)
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
      setTasks(
        tasks.map((task) => 
        task.id === id ? { ...task, reminder: !task.reminder } : task
         )
      )
  }

  return (
    <div className="container">
     <Header />
     <AddTask onAdd={addTask}/>
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'Show nothing here!!!'}
    </div>
  );
}

export default App;
