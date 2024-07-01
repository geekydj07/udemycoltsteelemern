const password=prompt("please enter anew password")

//password must be 6 characters
if(password.length >= 6){
    if(password.indexOf(' ')===-1){
        console.log("Valid password")
    }else{
        console.log("it cannot contain space")
    }
}else{
    console.log("password too short")
}


//do not include space

