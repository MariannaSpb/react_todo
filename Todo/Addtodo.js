import React, {useState} from 'react';
import PropTypes from 'prop-types';

function useInputValue(defaultValue = '') { //новый хук, объект которвый вернет хук, будет содержать ключи для нашего инпута
    const [value, setValue] = useState(defaultValue)
    return {
        bind: {
            value: value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value //функция которая получает значение value
    }
}

function AddTodo ( {onCreate}) {
   // const [value, setValue] = useState('') //начальное состояние value пустая строка
   const input = useInputValue('')

    function submitHandler (event) {
        event.preventDefault()
        if(input.value().trim()) {
            onCreate(input.value())
            input.clear()
           // setValue('')
        }
    }
    return (
        <form style={ {marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input {...input.bind} /> 
            <button type="submit">Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo