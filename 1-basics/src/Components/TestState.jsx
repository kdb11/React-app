import  { useState } from "react";
export function TestState() {

    const [name, setName] = useState("0");
    
    const HandleChange = (e) => {
       setName(e.target.value);
       console.log(e.target.value);
    }

    return <div>
        <p>Usestate</p>
        <input type="text" placeholder="name" onChange={HandleChange} value={name}/>
        <p>{name}</p>
    </div>
}