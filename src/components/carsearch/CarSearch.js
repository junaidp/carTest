import React, { useState , useEffect} from 'react'
import CarSearchByMarke from './CarSearchByMarke';
import CarSearchByTsn from './CarSearchByTsn';
import CarsList from './CarsList';


const CarSearch = () => {

    //const URL = 'https://jsonplaceholder.typicode.com/posts';

    const URL  = 'https://fd3b-213-196-213-232.ngrok.io/car?';
    const [data, setData] = useState([])
    const [selection, setSelection] = useState([])

    const fetchData = () => {
        console.log("calling url")
        fetch(URL)
            .then((res) =>
                res.json())
 
            .then((response) => {
                setData(response);
            })
    }

    function onSubmit(event){
        event.preventDefault();
        fetchData();
  }
  function onChangeValue(event){
    setSelection(event.target.value)
    
  }


    return (
        <>  
              <h2>Dein Fahrzeug</h2>
 <div onChange={onChangeValue}>   
<label class="container">Fahrzeugschein
  <input type="radio" checked="checked" name="radio" value="byTsn"/>
  <span class="checkmark"></span>
</label>
<label class="container">ahrzeugschein
  <input type="radio" checked="checked" name="radio" value ="byModel"/>
  <span class="checkmark"></span>
</label>
</div>        
<p></p>
          <CarSearchByMarke onSubmit={onSubmit}></CarSearchByMarke> 
          <CarSearchByTsn onSubmit={onSubmit}></CarSearchByTsn>  
          <CarsList data = {data}></CarsList>
        </>
    )
}
export default CarSearch



