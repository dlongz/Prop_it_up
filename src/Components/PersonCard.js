import React, { useState } from 'react';

const PersonCard = (props) => {
    const [bday, setBday] = useState(props.age);
    return (
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {bday}</p>
            <p>Hair Color: {props.hColor}</p>
            <button onClick={ ()=> setBday(bday + 1)}>Birthday Button for {props.firstName} {props.lastName} </button>
        </div>
    )
}

export default PersonCard;