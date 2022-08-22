import AppConsts from "../appconst";

//const URL = 'https://9979-213-196-213-232.ngrok.io/car?hsn=1679&tsn=214&vehicleType=PASSENGER_CAR&manufacture=volvo&fuelType=BENZIN&enginePowerRange=RANGE_0_TO_50KW&carType=LIMOUSINE&tradeName=trade&maxHits=1';
const URL = AppConsts.appBaseUrl
const Service = {
    get: (data) => {
        console.log("URL", URL);
        let url = URL + 'car?';
        if (data.herstellerNummer)
            url += `hsn=${data.herstellerNummer}`;
        if (data.typeNummer)
            url += `tsn=${data.typeNummer}`;
        if (data.marke)
            url += `manufacture=${data.marke}`;
        return fetch(url)
            .then((res) =>
                res.json())
    }
}
export default Service;

