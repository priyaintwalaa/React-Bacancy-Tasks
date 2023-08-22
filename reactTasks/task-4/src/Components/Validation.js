export default function Validation(obj){
    const errors ={}

    const email_validate = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/
   
    if(obj.name === ''){
        errors.name="Name is Required"
    }

    if(obj.email === ''){
        errors.email="Email is Required"
    }else if(!email_validate.test(obj.email)){
        errors.email="Email is not correct"
    }

    return errors;
}