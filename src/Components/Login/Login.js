import React,{useState} from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './Login.module.css'

const Login = (props) => {
    const [enteredEmail, setEnteredEmail] = useState('');//поле ввода емайл
    const [emailIsValid, setEmailIsValid] = useState('');//проверка поля true/false email
    const [enteredPassword, setEnteredPassword] = useState('');//поле ввода пассворд
    const [passwordIsValid,setPasswordIsValid] = useState(); //проверка поля true/false пароль
    const [formIsValid, setFormIsValid] = useState(false);//проверка полей true/false email & password.

            //email
    const emailCangeHandler = (event) => {
        //инпутка жазылган валю алат
        setEnteredEmail(event.target.value);

        setFormIsValid(
            //проверка валидацию эмайл инпутка жазылган валюну кайра алып includes('@'ушунун ичинде эмне болсо true болот и пасворд)
            event.target.value.includes('@') &&
            enteredPassword.trim().length > 6
        )
    };

            //password
    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);

        setFormIsValid(
            //проверка валидацию пароль и эмайл
            
            event.target.value.trim().length > 6 && enteredEmail.includes('@') 
        );
    };
    //******validate******** */
    const validateEamilHandler = () => {
        //@ бар болуш керек экенин текшерет,
        //болбосо иштебейт
        setEmailIsValid(enteredEmail.includes('@'))
    };

    //validePassword
    const validatePasswordHandler = () => {
        //password 6 dan chong bolush kerek
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    //****************** */
    const submitHandler = (event) => {
        //button baskanda function ishteit
        event.preventDefault();
        props.onLogin(enteredEmail, enteredPassword);
    }
    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                {/* input email */}
                <div
                className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''}`}>
                    <label htmlFor="email">E-Mial</label>
                    <input
                    type='email'
                    id="email"
                    value={enteredEmail}
                    onChange={emailCangeHandler}
                    onBlur={validateEamilHandler}
                    />
                </div>
                {/* input password */}
                <div
                className={`${classes.control}
                ${passwordIsValid === false ? classes.invalid : ''}`}>
                   <label htmlFor='password'>password</label>
                   <input
                   type='password'
                   id='password'
                   value={enteredPassword}
                   onChange={passwordChangeHandler}
                   onBlur={validatePasswordHandler}/>
                </div>
                <div className={classes.actions}>
                    <Button type='submit' className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    )
}

export default Login;
