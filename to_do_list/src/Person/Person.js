import React from "react";
import "./Person.css";

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>{props.name} is very super cool.</p>
            <input
                value={props.name}
                type="text"
                onChange={props.changedName}
            />
        </div>
    );
};

export default person;
