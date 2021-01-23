import { useState } from "react";

const AddTask = ({ onAdd })  => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Ongeza kitu bana acha hizo!!')
            return
        }

        onAdd({ text, day, reminder })

        setDay('')
        setText('')
        setReminder(false)
    }
    return (
        <form className='addform' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor=""> Task</label>
                <input type="text" placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor=""> Day and Time</label>
                <input type="text" placeholder='Add Day Time' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor=""> Reminder </label>
                <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type='submit' value='Save' className='btn btn-block'/>
        </form>
    )
}

export default AddTask