import React, { useState , useEffect} from 'react'

const CarSearchByTsn = (props) => {

    return (
        <>
           <form onSubmit={props.onSubmit} >
           <label>Herstellernummer</label>
            <input id='herstellerNummer' type='text'></input>
            <label>Typschlüsselnummer</label>
            <input id='typeNummer' type='text'></input>
           
            <button type='submit'>Search</button>
            
            </form>  
        </>
    )
}

export default CarSearchByTsn
