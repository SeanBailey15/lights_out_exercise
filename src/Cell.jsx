import React from "react";
import './Cell.css';

const Cell = ({isLit=false, toggleCellsAroundMe}) => {
    return (
        isLit === true ?
            <div className="Cell" style={{backgroundColor: "yellow"}} onClick={toggleCellsAroundMe} role="button"></div>:
            <div className="Cell" style={{backgroundColor: "darkgray"}} onClick={toggleCellsAroundMe} role="button"></div>
    )
}

export default Cell