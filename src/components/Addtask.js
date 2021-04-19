import { useState } from "react";

const AddTask = ({ onAdd })  => {

    const [company, setCompany] = useState('')
    const [receipt, setReceipt] = useState('')
    const [amount, setAmount] = useState('')
    const [vatable, setVatable] = useState('')
    const [vatamt, setVatamt] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()

        if(!company) {
            alert('Ongeza kitu bana acha hizo!!')
            return
        }

        onAdd({ company, receipt, amount, vatable, vatamt })

        setCompany('')
        setReceipt('')
        setAmount('')
        setVatable('')
        setVatamt('')
    }
    return (
        <form className='addform' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor=""> SELECT COMPANY</label>
                <input type="select" placeholder='Select Company' value={company} onChange={(e) => setCompany(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor=""> RECEIPT NO</label>
                <input type="text" placeholder='Enter receipt no' value={receipt} onChange={(e) => setReceipt(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor=""> TOTAL AMOUNT </label>
                <input type="text" placeholder='Total Receipt amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor=""> VATABLE AMOUNT</label>
                <input type="text" placeholder='Vatable amount' value={vatable} onChange={(e) => setVatable(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor=""> VAT AMOUNT</label>
                <input type="text" placeholder='Vat amount' value={vatamt} onChange={(e) => setVatamt(e.target.value)}/>
            </div>

            <input type='submit' value='Save' className='btn btn-block'/>
        </form>
    )
}

export default AddTask