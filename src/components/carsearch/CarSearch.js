import { Box, Card, Chip, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from '../../service';
import CustomDataTable from '../customComponents/CustomGrid';
import CarSearchByMarke from './CarSearchByMarke';
import CarSearchByTsn from './CarSearchByTsn';


const CarSearch = (props) => {

  const { get } = Service;
  //const URL = 'https://jsonplaceholder.typicode.com/posts';

  const [data, setData] = useState([])
  const [value, setValue] = React.useState(0);


  const fetchData = (data) => {
    debugger
    let url = `https://9979-213-196-213-232.ngrok.io/car?`;
    if (data.herstellerNummer)
      url += `hsn=${data.herstellerNummer}`;
    if (data.typeNummer)
      url += `tsn=${data.typeNummer}`;
    if (data.marke)
      url += `manufacture=${data.marke}`;

    console.log("calling url", url)
  
    fetch(url)
      .then((res) =>
        res.json())
      .then((response) => {
        handleData(response);
        //setData(response);
      })
  }

  

  const handleData = (data = []) => {
    if (data.length > 0) {
      let res = data.map((el, index) => {
        return el.id = index, el
      })
      setData(res);
    }
  }

  useEffect(() => {
    if (data.length > 0) {
      let res = data.map((el, index) => {
        return el.id = index, el
      })
      console.log("res", res);
    }
  }, [data])

  console.log("data", data);

  const columns = [
    { field: 'constructionCode', headerName: 'Construction Code', width: 70 },
    { field: 'constructionTypeEnum', headerName: 'Construction Type Enum', width: 130 },
    { field: 'enginePower', headerName: 'Engine Power', width: 130 },
    {
      field: 'fuelTypeCode',
      headerName: 'Fuel Type Code',
      width: 90,
    },
    {
      field: 'fuelTypeEnum',
      headerName: 'Fuel Type Enum',
      type: 'number',
      width: 90,
    },
    {
      field: 'manufacturer',
      headerName: 'Manufacturer',
      width: 90,
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Card>
      <div style={{ padding:10 }}>
        <h2>Dein Fahrzeug</h2>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Fahrzeugschein" />
          <Tab label="Ahrzeugschein" style={{ display: props.searchByTsn ? "" : "none"}}/>
        </Tabs>
        <TabPanel value={value} index={0}>
          <CarSearchByMarke handleSubmit={fetchData} />
        </TabPanel>
        <TabPanel value={value} index={1} >
          <CarSearchByTsn handleSubmit={fetchData} />
        </TabPanel>
        {/* <CarsList data={data}></CarsList> */}
        {data.length > 0 ? <CustomDataTable data={data} columns={columns} /> : <><Chip label="No Record Found" /></>}
      </div>
    </Card>

  )
}
export default CarSearch


const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}


