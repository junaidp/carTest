import { Button, Paper } from '@mui/material'
import React, { useState, useEffect } from 'react'
import CustomInput from '../customComponents/CustomInput'

const CarSearchByTsn = ({ handleSubmit }) => {

    const [form, setForm] = useState({
        herstellerNummer: '',
        typeNummer: ''
    })

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (
        <>
            <Paper className="main-container">
                <CustomInput type="text" title="Herstellernummer" name="herstellerNummer" value={form.herstellerNummer} handleChange={handleChange} />
                <CustomInput type="text" title="Typschlüsselnummer" name="typeNummer" value={form.typeNummer} handleChange={handleChange} />
            </Paper>

            <div style={{ textAlign: 'left', margin: '10px' }}>
                <Button variant="outlined" onClick={() => handleSubmit(form)}>Search</Button>
            </div>
        </>
    )
}

export default CarSearchByTsn
