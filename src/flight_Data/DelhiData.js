import Emirates from '../Images/Emirateslogo.png'
import IndiGo from '../Images/indigoLogo.png'
import United from '../Images/UnitedLogo.png'
import Delta from '../Images/deltaLogo.webp'

const FlightRoutesDetails = [
    {
        id: 1,
        FromCityFlightId: 1,    
        ToCityFlightId: 2,
        At: '23:10m',
        To: '01:25m',
        hours: "2h_10m",
        Price: 5100,
        Airline: "IndiGo",
        AirlineLogoPng:IndiGo
    },
    {
        id: 2,
        FromCityFlightId: 1,
        ToCityFlightId: 2,
        At: '21:10m',
        To: '23:25m',
        hours: "2h_00m",
        Price: 6200,
        Airline: "Delta Air Lines",
        AirlineLogoPng:Delta
    },
    {
        id: 3,
        FromCityFlightId: 1,
        ToCityFlightId: 2,
        At: '23:40m',
        To: '02:5m',
        hours: "2h_30m",
        Price: 3100,
        Airline: "IndiGo",
        AirlineLogoPng:IndiGo
    },
    {
        id: 4,
        FromCityFlightId: 1,
        ToCityFlightId: 2,
        At: '23:00m',
        To: '01:25m',
        hours: "1h_45m",
        Price: 7100,
        Airline: "Emirates",
        AirlineLogoPng:Emirates
    },
    {
        id: 5,
        FromCityFlightId: 1,
        ToCityFlightId: 2,
        At: '23:10m',
        To: '01:25m',
        hours: "1h_55m",
        Price: 4100,
        Airline: "United Airlines",
        AirlineLogoPng:United
    },
    {
        id:6,
        FromCityFlightId: 1,
        ToCityFlightId: 2,
        At: '23:10m',
        To: '01:25m',
        hours: "1h_55m",
        Price: 5000,
        Airline: "Indigo Airline",
        AirlineLogoPng:IndiGo
    },

        //From Puna TO All others 
    {
        id:7,
        FromCityFlightId: 2,
        ToCityFlightId: 1,
        At: '23:10m',
        To: '01:25m',
        hours: "1h_55m",
        Price: 5000,
        Airline: "Indigo Airline",
        AirlineLogoPng:IndiGo
    },
    {
        id: 8,
        FromCityFlightId: 2,
        ToCityFlightId: 1,
        At: '23:40m',
        To: '02:5m',
        hours: "2h_30m",
        Price: 3100,
        Airline: "IndiGo",
        AirlineLogoPng:IndiGo
    },
    {
        id: 9,
        FromCityFlightId: 2,
        ToCityFlightId: 1,
        At: '23:40m',
        To: '02:5m',
        hours: "2h_30m",
        Price: 3100,
        Airline: "IndiGo",
        AirlineLogoPng:IndiGo
    },
    {
        id: 10,
        FromCityFlightId: 2,
        ToCityFlightId: 1,
        At: '23:40m',
        To: '02:5m',
        hours: "2h_30m",
        Price: 3100,
        Airline: "IndiGo",
        AirlineLogoPng:IndiGo
    },
    {
        id: 11,
        FromCityFlightId: 2,
        ToCityFlightId: 1,
        At: '23:40m',
        To: '02:5m',
        hours: "2h_30m",
        Price: 3100,
        Airline: "IndiGo",
        AirlineLogoPng:IndiGo
    },
    {
        id: 12,
        citysRoyes:[{
            FromCityFlightId: 2,
            ToCityFlightId: 1,
        }
        ],
        At: '23:40m',
        To: '02:5m',
        hours: "2h_30m",
        Price: 3100,
        Airline: "IndiGo",
        AirlineLogoPng:IndiGo
    },
    {
        id: 13,
        citysRoyes:{
            FromCityFlightId: 2,
            ToCityFlightId: 1,
        },
        At: '23:40m',
        To: '02:5m',
        hours: "2h_30m",
        Price: 3100,
        Airline: "IndiGo",
        AirlineLogoPng:IndiGo
    },
    {
        id: 14,
        citysRoyes:{
            FromCityFlightId: 2,
            ToCityFlightId: 1,
        },
        At: '23:40m',
        To: '02:5m',
        hours: "2h_30m",
        Price: 3100,
        Airline: "IndiGo",
        AirlineLogoPng:IndiGo
    },
]
export default FlightRoutesDetails;