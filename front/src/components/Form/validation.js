

const validation = (userData) => {
    let errors={};

    const regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    const regExPassword = /\d/;
    //email
    
    if(!regExEmail.test(userData.username)){
        errors.username = 'Igresa un email, por favor';
    }
    if(!userData.username){
        errors.username ='Este campo no puede estar vacío'
    }
    if(userData.username.length > 35){
        errors.username = 'El usuario no debe tener más de 35 caracteres';
    }
    // passord

    if(!userData.password.match(regExPassword)){
        errors.password = 'La contraseña debe tener al menos un número'
    }

    if(userData.password.length<6 || userData.password.length>10){
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
    }

    return errors;
}

export default validation;
