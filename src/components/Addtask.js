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
                <label htmlFor=""> SELECT COMPANY</label>
                <input type="select" placeholder='Select Company' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor=""> RECEIPT NO</label>
                <input type="text" placeholder='Enter receipt no' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor=""> TOTAL AMOUNT </label>
                <input type="text" placeholder='Total Receipt amount' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor=""> VATABLE AMOUNT</label>
                <input type="text" placeholder='Vatable amount' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor=""> VAT AMOUNT</label>
                <input type="text" placeholder='Vat amount' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>

            <input type='submit' value='Save' className='btn btn-block'/>
        </form>
    )
}

export default AddTask