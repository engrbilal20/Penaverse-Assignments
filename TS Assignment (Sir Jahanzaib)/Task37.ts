function make_shirt1(Message:String, Size:string="Large") {
    if (Size=== "Large") {
        console.log(`Your shirt size is ${Size} and the message "I love Typescript" will be written on it.`)}
    else if(Size=== "Medium") {
        console.log(`Your shirt size is ${Size} and the message "I love Typescript" will be written on it.`)}
    else{console.log(`Your shirt size is ${Size} and the message "${Message}" will be written on it.`)}

} 
make_shirt1 ("I Love Pakistan")
make_shirt1 ("I Love Pakistan", "Small")