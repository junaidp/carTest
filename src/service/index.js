const URL = 'https://9979-213-196-213-232.ngrok.io/car?hsn=1679&tsn=214&vehicleType=PASSENGER_CAR&manufacture=volvo&fuelType=BENZIN&enginePowerRange=RANGE_0_TO_50KW&carType=LIMOUSINE&tradeName=trade&maxHits=1';
const Service = {
    get: async () => {
        let url = URL ;
        fetch(url)
            .then((res) =>
                res.json())
            .then((data) => data)
            .catch((error) => error)
    }
}
export default Service;

