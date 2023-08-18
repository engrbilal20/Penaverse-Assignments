let carInfo=(manufacturer:string, Model:string, ...args:string[])=> 
{const carObj = {
    "Manufacturer": `${manufacturer}`,
    "Model": `${Model}`,
    "Colour": `${args[0]}`,
    "Engine Capacity": `${args[1]}`,

}
console.log("Manufacturer =", carObj.Manufacturer, "\nModel =", carObj.Model, "\nColour =",carObj.Colour, "\nEngine Capacity =", carObj["Engine Capacity"] )
}
carInfo("Honda", "Fit", "Blue", "1500 cc")
