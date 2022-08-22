import { Box, Card, Chip, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Service from '../../service';
import { selectedCars, setCarsToState } from '../../store/reducers/search-car';
import CustomDataTable from '../customComponents/CustomGrid';
import CarSearchByMarke from './CarSearchByMarke';
import CarSearchByTsn from './CarSearchByTsn';


const CarSearch = (props) => {

  const { get } = Service;
  const [tabValue, setTabValue] = useState(0);
  const dispatch = useDispatch();
  const { cars } = useSelector(selectedCars);

  const fetchData = (data) => {
    console.log("calling url")
    get(data).then((res) => {
      console.log(handleData(res));
      dispatch(setCarsToState(handleData(res)));
    });
  }

  const handleData = (data = []) => {
    if (data.length > 0) {
      let res = data.map((el, index) => {
        el.id = index
        return el;
      })
      return res
    }
  }

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

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  console.log("cars", cars);
  return (
    <Card>
      <div style={{ padding: 10 }}>
        <h2>Dein Fahrzeug</h2>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Fahrzeugschein" />
          <Tab label="Ahrzeugschein" style={{ display: props.searchByTsn ? "" : "none" }} />
        </Tabs>
        <TabPanel value={tabValue} index={0}>
          <CarSearchByMarke handleSubmit={fetchData} />
        </TabPanel>
        <TabPanel value={tabValue} index={1} >
          <CarSearchByTsn handleSubmit={fetchData} />
        </TabPanel>
        {/* <CarsList data={data}></CarsList> */}
        {cars.length > 0 ? <CustomDataTable data={cars} columns={columns} /> : <><Chip label="No Record Found" /></>}
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


