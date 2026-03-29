import validator from 'validator';

interface signUpData{
    name:string;
    email:string;
    password:string;
}

export function validateSignUpData({name,email,password}:signUpData):void{
    

    if(!name || name.trim()===''){
        throw new Error("Name is required.");
    }
    else if(!email || !validator.isEmail(email)){
        throw new Error("Invalid Email Id.");
    }
    else if(!password || !validator.isStrongPassword(password)){
        throw new Error("Enter a strong password.");
    }
}
