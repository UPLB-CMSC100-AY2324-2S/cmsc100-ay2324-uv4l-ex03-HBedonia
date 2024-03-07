function matchChecker(pass1, pass2){
    if (pass1 === pass2){
        if(pass1.length >= 8 ){ // checks if the pass1's length is atleast 8 characters or longer
            if (pass1.match(/[0-9]/) && pass1.match(/[A-Z]/) && pass1.match(/[a-z]/)) { // checks if the password has atleast 1 number, 1 uppercase character, and 1 lowercase character
                return true; 
            } else{
                console.log("Invalid Password") 
                return false
            }
        } else{
            console.log("Invalid! Password must be 8 characters long.")
            return false
        }
    } 
    else{
        console.log("Invalid! Passwords do not match")
        return false
    }
}

function reversePassword(pass1){
    let reversed = "" // will store here the reversed password

    for (let a = pass1.length-1; a >= 0 ; a--){
        reversed += pass1[a] // add the letters of pass1 in reversed using a for loop that counts down the index
    }
    
    return reversed
}

function storePassword(username, pass1, pass2){
    const info = {
        name: username,
        newpassword: pass1,
    }
    if (matchChecker(pass1, pass2)) { // if passwords do not match, the newpassword is the first given password
        info.newpassword = reversePassword(pass1);
    }
    return info
}
//sample output
console.log(storePassword("John", "Pass1234", "Pass1234") )
console.log(storePassword("John", "Pass123", "Pass12345"));