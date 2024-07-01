const password=prompt("please enter anew password")

//password must be 6 characters
if(password.length>=6){
    console.log("LONG ENOUGH PASSWORD")
}else{
    console.log("password too short")
}


//do not include space

if(password.indexOf(' ')===-1){
    console.log("Good job! No space")
}else{
    console.log("it cannot contain space")
}