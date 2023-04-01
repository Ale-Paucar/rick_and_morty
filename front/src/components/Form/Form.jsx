import styles from './Form.module.css';
import { useEffect, useState } from 'react';
import validation from './validation.js';

export default function Form({ login }) {
    const [userData, setUserData] = useState({
        username: '', 
        password: '' 
    });
    // funciones para el estado del objeto userData
    const handleInputChange = (event) => {
        
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    //estado local de error

    const [errors, setErrors] = useState({
        username: '', 
        password: '' 
    });

    //login
    const handleSumbit = (event) => {
        event.preventDefault();
        login(userData);
    }
    // useEffect(()=>{
    //     validation(userData, errors, setErrors);    
    // },[userData])
    


    return(
        <form className={styles.formulario} onSubmit={handleSumbit}>
            <label htmlFor='username'>Username:</label>
            <input type="text" name='username' value={userData.username}  onChange={handleInputChange}/>
            {errors.username !== '' ? <p className={styles.errorsMsjs}>{errors.username}</p> : ''}
            <label htmlFor='password'>Password:</label>
            <input type="password" name='password' value={userData.password} onChange={handleInputChange}/>
            {errors.password !== '' ? <p className={styles.errorsMsjs}>{errors.password}</p> : ''}
            <button type="submit">LOGIN</button>
        </form>
    )
}