const weather=require("./methods/weather")
const location=require("./methods/location")

const city=process.argv[2]

location(city,(error,data)=>{
    console.log("ERROR : " , error);
    console.log("RESPONSE : " , data);
    weather(data.Latitude,data.longitude,(error,data)=>{
        console.log("ERROR : " , error);
        console.log("RESPONSE : " , data);
    })
})