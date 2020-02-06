import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from '../context';
//компонент пункта меню

//задать инлайновые стили
const styles =  {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc', 
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }

}

function TodoItem({ itemObj, index, onChange }) {
    const { removeTodo } = useContext(Context)
    const classes= []
    // if (itemObj.completed) {
    //     classes.push('done')
    // }
    itemObj.completed?classes.push('done'):classes.push('')
    return (
    <li style = {styles.li}>
        <span className={classes.join(' ')}>
        <input type="checkbox"
        checked={itemObj.completed}
        style= {styles.input} 
        onChange= {() => onChange(itemObj.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {itemObj.title}
        </span>
        <button className="rm" onClick={removeTodo.bind(null, itemObj.id)}>&times;</button>
    </li>
    )

}


//описание входящих свойств в нужный компонент
// функция примимает два параметра, их будем валидировать

TodoItem.propTypes = {
    itemObj: PropTypes.object.isRequired, //объект todo дб типом obj
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem