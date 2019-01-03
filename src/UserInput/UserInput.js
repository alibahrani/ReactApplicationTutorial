import React from 'react';

const userInput = (props) => {

    return (
        <div className="userInput">
            <p>{props.userInput}</p>
            <input type="text" onChange={props.changed} />
        </div>
    )
}

export default userInput; 
