import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
           <h1 style={titleStyle}>My Todo List</h1> 
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    marginBottom: '5px'
}

const titleStyle = {
    fontFamily: 'Roboto',
    fontWeight: '700'
}

export default Header;