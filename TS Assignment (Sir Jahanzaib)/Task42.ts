let magicians1= ["Jhon", "Jack", "Eric", "Wills", "Zack"]
for (var i=0; i<magicians1.length; i++)
{function make_Great (mag:string){
    magicians1.splice(i,1,`The Great ${magicians1[i]}`)
}
make_Great(magicians1[i])
}
console.log(magicians1)