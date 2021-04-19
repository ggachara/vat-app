import  { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.company}{' '} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/> </h3>
            <h4>Receipt No: {task.receipt} </h4>
            <p style={{color: 'red'}}>Total Amt: {task.amount}</p>
            <p style={{color: 'red'}}>Total Vatable: {task.vatable}</p>
            <p style={{color: 'red'}}>Total VAT: {task.vatamt}</p>
        </div>
    )
}

export default Task
