import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';

const CustomInput = ({ type, handleChange, title, value, placeholder, name, options = [] }) => {

    const optionGenerator = (data = []) => {
        return data.map((el, index) => (
            <MenuItem key={index} value={el.value}>{el.label}</MenuItem>
        ))
    }

    return (
        <>  <FormControl fullWidth>
            {type == "text" && <TextField name={name} label={title} variant="outlined" onChange={handleChange} value={value} />}
            {type == "radio" && <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>}
            {type == "select" && <>
                <InputLabel id={'id' + '-' + name}>{title}</InputLabel>
                <Select
                    labelId={name}
                    name={name}
                    value={value}
                    label={title}
                    onChange={handleChange}
                    style={{ width: '100%' }}
                >
                    {optionGenerator(options)}
                </Select></>}
        </FormControl>

        </>
    );
}

export default CustomInput;