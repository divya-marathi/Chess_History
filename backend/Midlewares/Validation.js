const emailValidation = (email)=>{
    var result = /\S+@\S+\.\S+/;
    return result.test(email)

}

const passwordValidation = (password)=>{
    return password.length > 4 ? true : false
}


module.exports = {emailValidation,passwordValidation}