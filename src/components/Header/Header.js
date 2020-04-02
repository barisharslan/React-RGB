import React from 'react';
import './Header.css'

const Header = ( props ) => {
    const getDifficulty = () => {
        if (props.diff === 0) { return "Easy" }
        else if (props.diff === 1) { return "Medium" }  // this whole part needs to be done better...
        else if (props.diff === 2) { return "Hard" }
        else if (props.diff === 3) { return "Extreme" }
        else if (props.diff === 4) { return "Insane" }
        else { return "Error" }
    }
    
    return (
        <React.Fragment>
            <div className="header">
                <h1>Guess This</h1>
                <h1>RGB({props.color.join(', ')})</h1>
                <h1>Color Code!</h1>
            </div>
            <div className="controlBar">
                <button onClick={props.newGameHandler}>New Game</button>
                <button onClick={props.diffChangedHandler}>Difficulty: {getDifficulty()}</button>
            </div>
        </React.Fragment>
    )
}

export default Header;