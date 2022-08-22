import React from 'react'

const CarsList = (props) => {
    console.log(props.data);

    
    
    return (
        <>
            <tbody>
            <tr>
                    <th>constructionCode</th>
                    <th>constructionTypeEnum</th>
                    <th>enginePower</th>
                    <th>fuelTypeCode</th>
                    <th>fuelTypeEnum</th>
                    <th>manufacturer</th>
                </tr>
                {props.data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.constructionCode}</td>
                        <td>{item.constructionTypeEnum}</td>
                        <td>{item.enginePower}</td>
                        <td>{item.fuelTypeCode}</td>
                        <td>{item.fuelTypeEnum}</td>
                        <td>{item.manufacturer}</td>
                      
                    </tr>
                   
         ))}
          </tbody>
        </>
    )
}

export default CarsList
