import React from "react";

function Menu({ setMode }) {
    return (
        <div className="menu">
            <h1 className="h1">Tic Tac Toe</h1>
            <h2>Select Mode</h2>
            <button className="menu-button" onClick={() => setMode("Easy")}>
                Easy
            </button>
            <button className="menu-button" onClick={() => setMode("Hard")}>
                Hard
            </button>
        </div>
    );
}

export default Menu;