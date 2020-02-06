import React from 'react';
import PropTypes from 'prop-types';
//компонент списка
import TodoItem from './TodoItem';

const style = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }

}

function TodoList(props) {
    return (
        <ul style={style.ul}>
            {props.todos.map((itemObj, id) => { //props.todos????
                return <TodoItem itemObj={itemObj} key={itemObj.id} index={id} onChange= {props.onToggle}></TodoItem>
            })}
        </ul>
    )
}


//описание входящих свойств в нужный компонент
//в компонент TodoList мы принимаем параметр todos

TodoList.propTypes = {    //обратиться к функции TodoList  и определить у нее сво-во propTypes
    todos: PropTypes.arrayOf(PropTypes.object).isRequired, //здесь ключ-название свойства, определили тип массив из объектов.
    onToggle: PropTypes.func.isRequired
}

export default TodoList




//если передать в параметры index то index={index}
//onToggle придумали сами название

