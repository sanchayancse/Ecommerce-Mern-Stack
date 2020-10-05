
const uniqueMessage = error =>{
    let output
    try{
        let fieldname = error.message.substring(
            error.message.lastIndexOf(".$") + 2,
            error.message.lastIndexOf("_1")
        );
        output = fieldname.charAt(0).toUpperCase() + fieldname.slice(1) + " already exists";
    }catch(ex){
            output = "Unique field already exists"
    }

    return output;
}



exports.errorHandler = error =>{

    let message = "";

    if(error.code){
        switch(error.code){
            case 11000:
            case 11001:
                message = uniqueMessage(error);
                break;
                default:
                    message = "Something Went wrong"
        }
    } else{
        for (let errorName in error.errorors){
            if(error.errorors[errorName].message)
                message = error.errorors[errorName].message;
        }
    }

    return message;
}