const userModel = require('../models/userModel');

module.exports.createUser = async({
    firstname, lastname, email, password, cpassword
}) => {
    if(!firstname || !lastname || !email || !password || !cpassword){
        throw new Error("All Feilds are required");
    }

    const user = userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        cpassword
    })

    return user;
}