import React, {useState, useEffect} from 'react';


function Clock()
{
    // STYLEE
    const divStyle = {
        textAlign: "center",
        fontFamily: "sans-serif",
        
    }
    const countStyle = {
        border: "none",
        backgroundColor: "",
        borderRadius: "0.5em",
        fontWeight: "bold",
        fontSize: "2em",
        fontFamily: "sans-serif",
        width: "3em",
        height: "3em",
    }

    // =====================================
    const [count, setCount] = useState(0)

    function Increase()
    {
        setCount(c => c + 1)
    }
    function Decrease()
    {
        setCount(c => c - 1)
    }

    return(
        <>
        <div style={divStyle}>
            <button style={countStyle} onClick={Increase}>+1</button>
            <h1>{count}</h1>
            <button style={countStyle} onClick={Decrease}>-1</button>
        </div>
        </>
    );
}

export default Clock
