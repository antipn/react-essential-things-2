import React, {useState} from 'react'
import classes from './InputForm.module.css'
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";


const InputForm = (props) => {

    const defaultName = ''
    const defaultAge = '0'


    const [formDataName, setFormDataName] = useState(defaultName);
    const [formDataAge, setFormDataAge] = useState(defaultAge);

    const [isValidName, setIsValidName] = useState(false);
    const [isValidAge, setIsValidAge] = useState(false);

    const changeNameHandler = (event) => {
        setFormDataName(event.target.value)
        checkName(event.target.value)
    }

    const changeAgeHandler = (event) => {
        setFormDataAge(event.target.value)
        checkAge(event.target.value)
    }

    const checkName = (inputName) => {
        // console.log('Changing variable Name:', inputName, ' is valid: ', isValidName)
        setIsValidName(inputName.trim().length > 0)
        return (inputName.trim().length > 0)
    }

    const checkAge = (inputAge) => {
        // console.log('Changing variable Age:', inputAge , ' is valid ', isValidAge)
        setIsValidAge(inputAge > 0)
        return inputAge > 0
    }

    function formSubmitHandler(event) {
        event.preventDefault()
         checkAge(formDataAge)
         checkName(formDataName)

        // if (isValidName & isValidAge) {
        if (checkName(formDataName) & checkAge(formDataAge)) {
            console.log('Form submitted successfully')
            // console.log('Name is valid:', isValidName)
            // console.log('Age is valid:', isValidAge)
            props.onAddUser({name: formDataName, age: formDataAge})
            setFormDataName(defaultName)
            setFormDataAge(defaultAge)
        } else {
            console.log('Form submitted unsuccessfully!!')
            console.log('Show error layer here !')
            // console.log('Name is valid:', isValidName)
            // console.log('Age is valid:', isValidAge)
        }
    }

    return (
        //пропихиваем свои стили через пропс и в Card применяем что получается
        <Card className={classes.input}>
            <form onSubmit={formSubmitHandler}>
                <label>Username</label>
                <input id="username"
                       type="text"
                       value={formDataName}
                       onFocus={() => setFormDataName('')}
                       onChange={changeNameHandler}

                />
                <label>Age (years)</label>
                <input
                    id="age"
                    type="number" min='0'
                    step='1'
                    value={formDataAge}
                    onChange={changeAgeHandler}
                />
                <Button type='submit' onClick={formSubmitHandler}>Add data</Button>
            </form>
        </Card>
    )
}

export default InputForm

