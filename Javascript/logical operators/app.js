// let password=prompt("ENTER A PASSWORD")

// if(password.length>=6 && password.indexOf(' ')===-1){
//     console.log("Valid password")
// }else{
//     console.log("Invalid Password")
// }


//0-5 free
//5-10 $10
//10--65 $20
//65 or more free


const age=90;

if(age>=0 && age<5 || age>=65){
    console.log("free")
}
else if(age>=5 && age<10){
    console.log("pay $10")
}
else if(age>=10 && age<65){
    console.log(" pay $20")
}
else{
    console.log("Invalid Age")
}
