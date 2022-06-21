import React from "react";

function Joke (props) {
    return (
        <div>
            <h2>{props.setup}</h2>
            <h1>{props.punchline}</h1>
        </div>
    )
}

export default Joke