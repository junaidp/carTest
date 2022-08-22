import { Box, Card, Chip, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from '../../service';
import CustomDataTable from '../customComponents/CustomGrid';
import CarSearchByMarke from './CarSearchByMarke';
import CarSearchByTsn from './CarSearchByTsn';

const CarSearch = () => {

  const { get } = Service;
  //const URL = 'https://jsonplaceholder.typicode.com/posts';

  const [data, setData] = useState([])
  const [value, setValue] = React.useState(0);

  // const fetchData = () => {
  //   console.log("calling url")
  //   get().then((res) => {
  //     setData(res);
  //     console.log("response", res);
  //   });
  // }



  // const onSubmit = (event) => {
  //   //event.preventDefault();
  //   fetchData();

  //   //   //const URL = 'https://jsonplaceholder.typicode.com/posts';

  //   const URL = 'https://9979-213-196-213-232.ngrok.io/car?hsn=1679&tsn=214&vehicleType=PASSENGER_CAR&manufacture=volvo&fuelType=BENZIN&enginePowerRange=RANGE_0_TO_50KW&carType=LIMOUSINE&tradeName=trade&maxHits=1';
  //   // const [data, setData] = useState([])
  //   // const [selection, setSelection] = useState([])

  // }

  const fetchData = (data) => {
    debugger
    let url = `https://9979-213-196-213-232.ngrok.io/car?`;
    //console.log("calling url", data)
    if (data.herstellerNummer)
      url += `hsn=${data.herstellerNummer}`;
    if (data.typeNummer)
      url += `tsn=${data.typeNummer}`;
    if (data.marke)
      url += `manufacture=${data.marke}`;
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

  //   const handleData = (data = []) => {
  //     debugger
  //    
  //     console.log(res);
  // }


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

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Card>
      <div style={{ padding: 10 }}>
        <h2>Dein Fahrzeug</h2>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Fahrzeugschein" />
          <Tab label="Ahrzeugschein" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <CarSearchByMarke handleSubmit={fetchData} />
        </TabPanel>
        <TabPanel value={value} index={1}>
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


