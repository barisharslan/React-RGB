import React from 'react';
import './Header.css'

const Header = ( props ) => {
    let difficulty;
    if (props.diff === 0) { difficulty = "Easy" }
    else if (props.diff === 1) { difficulty = "Medium" }  // this whole part needs to be done better...
    else if (props.diff === 2) { difficulty = "Hard" }
    else if (props.diff === 3) { difficulty = "Extreme" }
    else if (props.diff === 4) { difficulty = "Insane" }
    else { difficulty = "Error" }
    return (
        <div className="header">
            <h1>Guess This</h1>
            <h1>RGB({props.color.join(', ')})</h1>
            <h1>Color Code!</h1>
            <h1>Difficulty: {difficulty}</h1>
        </div>
    )
}

export default Header;