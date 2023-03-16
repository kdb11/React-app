import { useState } from "react";

export function Calculator() {
    let [a, setA] = useState(0);
    let [b, setB] = useState(0);
    let [c, setC] = useState(0);

    const HandleAChange = (e) => {
        setA = e.target.value;
    };

    const HandleBChange = (e) => {
        setB = e.target.value;
    };

    const HandleClick = () => {
        setC = a + b;
    };

    
    return <div>
        <form action="">
        <input type="text" onChange={HandleAChange} />
        <p>+</p>
        <input type="text" onChange={HandleBChange}/>
        <p>{}</p>
        <button type="button" onClick={HandleClick}>=</button>
        </form>
        <p>Calculator</p>
    </div>
}