import React from "react";
import "./Person.css";

const person = (props) => {
    const style = {
        "@media (min-width : 500px)": {
            backgroundColor: "red",
        },
    };
    return (
        <div style={style} className="Person">
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
