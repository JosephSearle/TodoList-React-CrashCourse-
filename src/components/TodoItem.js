import React from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends React.Component {
    getStyle = () => {
        return {
            background: this.props.todo.completed ? '#BADA55' : '#f4f4f4',
            padding: '10px',
            fontFamily: 'Roboto',
            marginBottom: '2px',
            borderBottom: '1px #000 solid',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }


    render() {
        const { id, title} = this.props.todo;
        return(
           <div style={this.getStyle()}> 
               <p>
                   <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                   { title }
                   <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                   <p onClick={this.props.delTodo.bind(this, id)} style={delStyle}>Remove</p>
                </p>
           </div> 
        );
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const delStyle = {
    float: 'right',
    padding: '2px 8px',
    fontFamily: 'Roboto',
    cursor: 'pointer'
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem