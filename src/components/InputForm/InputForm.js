import React, {useState} from 'react'
import './InputForm.css'

const InputForm = (props) => {

    const defaultName = 'Enter the name'
    const defaultAge = '0'


    const [formDataName, setFormDataName] = useState(defaultName);
    const [formDataAge, setFormDataAge] = useState(defaultAge);

    const changeNameHandler = (event) => {
        setFormDataName(event.target.value)
    }

    const changeAgeHandler = (event) => {
        setFormDataAge(event.target.value)
    }

    const checkName = () => {
        return (formDataName.trim().length > 0)
    }

    const checkAge = () => {
        return formDataAge > 0

    }

    function formSubmitHandler(event) {
        event.preventDefault()

        if (checkName() && checkAge()) {
            console.log('Form submitted successfully')
            props.onAddUser({name:formDataName, age: formDataAge})
        } else {
            console.log('Form submitted unsuccessfully!!')
        }
    }

    return (
        <div className='form_data__form'>
            <form onSubmit={formSubmitHandler}>
                <div className='form_data__controls'>

                    <div className='form_data__control'>
                        <label>Name</label>
                        <input type="text"
                               value={formDataName}
                               onFocus={() => setFormDataName('')}
                               onChange={changeNameHandler}

                        />
                    </div>
                    <div className='form_data__control'>
                        <label>Age</label>
                        <input type="number" min='0'
                               step='1'
                               value={formDataAge}
                               onChange={changeAgeHandler}
                        />
                    </div>
                </div>
                <div className='form_data_buttons'>

                    <button type='submit' onClick={formSubmitHandler}>Add data</button>

                </div>

            </form>
        </div>
    )
}

export default InputForm

