let describe_city=(City:String, Country:String)=> {
    if(City==="Dehli") {console.log(`${City} is not in ${Country}`)}
    else {console.log(`${City} is in ${Country}`)}
}
describe_city("Lahore", "Pakistan")
describe_city("Karachi", "Pakistan")
describe_city("Dehli", "Pakistan")