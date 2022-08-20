import React, { useState , useEffect} from 'react'
import style from './CarSearch.module.css'
import axios from 'axios';
import DropDown from '../customComponents/DropDown';

const CarSearchByMarke = (props) => {

    
    const [marke, setMarke] = React.useState('');
    const [model, setModel] = React.useState('');
    const [kraftstoffart, setKraftstoffart] = React.useState('');
    const [kwps, setKwps] = React.useState('');
 
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
    
    const onMarke = (event) => {
        setMarke(event.target.value);  
      };

    const onModel = (event) => {
        setModel(event.target.value);
       };
    
    const onKraftstoffart = (event) => {
        setKraftstoffart(event.target.value);
       };
    const onKwps = (event) => {
        setKwps(event.target.value);
       };   


    return (
        <>
             
            <form onSubmit={props.onSubmit} >
            <label>Welches Kennzeichen Hast Du?</label>
            <input id='Kennzeichen' type='text'></input>
            <DropDown label = "Marke" options ={optionsMarke} value  = {marke}  onChange = {onMarke} />
            <DropDown label = "Model" options ={optionsModel} value  = {model}  onChange = {onModel} />
            <label>Baujahr</label>
            <input id='bauJahr' type='text'></input>
            <DropDown label = "Kraftstoffart" options ={optionsKraftstoffart} value  = {kraftstoffart}  onChange = {onKraftstoffart} />
            <DropDown label = "Leistung in kw/PS" options ={optionsKwps} value  = {kwps}  onChange = {onKwps} />
            <label>Hubraum</label>
            <input id='hubraum' type='text'></input>                 

          
            <button type='submit'>Search</button>
            
            </form>
            
        </>
    )
}

export default CarSearchByMarke
