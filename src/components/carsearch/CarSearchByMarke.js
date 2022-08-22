import { Button, Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import CustomInput from '../customComponents/CustomInput';
import './style.css';

const CarSearchByMarke = ({handleSubmit}) => {


  // const [marke, setMarke] = React.useState('');
  // const [model, setModel] = React.useState('');
  // const [kraftstoffart, setKraftstoffart] = React.useState('');
  // const [kwps, setKwps] = React.useState('');

  const [form, setForm] = useState({
    marke: '',
    model: '',
    kraftstoffart: '',
    kwps: '',
    kraftstoffart: '',
    leistungInkwPS: ''
  })

  const optionsMarke = [
    { id: '1', label: 'Audi', value: 'audi' },
    { id: '2', label: 'BMW', value: 'bmw' },
    { id: '3', label: 'Ford', value: 'ford' },
  ];

  const optionsModel = [
    { id: '1', label: '1e3', value: '1er' },
    { id: '2', label: '3er', value: '3er' },
    { id: '3', label: '5er', value: 'ford' },
  ];

  const optionsKraftstoffart = [
    { id: '1', label: 'Benzin', value: 'benzin' },
    { id: '2', label: 'Diesel', value: 'diesel' },
    { id: '3', label: 'Sonstiges', value: 'sonsitiges' },
  ];
  const optionsKwps = [
    { id: '1', label: '0,50', value: '050' },
    { id: '2', label: '50,100', value: '50100' },
    { id: '3', label: '100,150', value: '100150' },
  ];

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }


  return (
    <>
      <Paper className="main-container">
        <CustomInput type="text" title="Welches Kennzeichen Hast Du?" name="kennzeichen" value={form.kennzeichen} handleChange={handleChange} />
        <CustomInput type="select" options={optionsMarke} title="Marke" name="marke" value={form.marke} handleChange={handleChange} />
        <CustomInput type="select" options={optionsModel} title="Model" name="model" value={form.model} handleChange={handleChange} />
        <div className="main-container" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {/* <input id='bauJahr' type='text' style={{ marginRight: '5px' }} placeholder='From' ></input>
              <input id='bauJahr' type='text' placeholder='To' ></input> */}
          <CustomInput type="text" title="From" name="from" value={form.from} handleChange={handleChange} />
          <CustomInput type="text" title="To" name="to" value={form.to} handleChange={handleChange} />
        </div>
        <CustomInput type="select" options={optionsKraftstoffart} title="Kraftstoffart" name="kraftstoffart" value={form.kraftstoffart} handleChange={handleChange} />
        <CustomInput type="select" options={optionsKwps} title="Leistung in kw/PS" name="leistungInkwPS" value={form.leistungInkwPS} handleChange={handleChange} />

      </Paper>

      <div style={{ textAlign: 'left', margin: '10px' }}>

        <Button variant="outlined" onClick={() => handleSubmit(form)}>Search</Button>
      </div>
    </>
  )
}

export default CarSearchByMarke
