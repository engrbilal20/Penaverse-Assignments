let magicians2= ["Jhon", "Jack", "Eric", "Wills", "Zack"]
let magi_Duplicate= magicians2.slice()
for (var i=0; i<magi_Duplicate.length; i++)
{function make_Great (mag:string){
    magi_Duplicate.splice(i,1,`The Great ${magi_Duplicate[i]}`)
}
make_Great(magi_Duplicate[i])
}
console.log(magicians2)
console.log(magi_Duplicate)