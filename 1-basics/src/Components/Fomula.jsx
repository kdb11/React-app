import { useState } from 'react'
import { User } from './models/User.js';
import { Adress } from './models/Adress.js';

export function Formula() {

    let [name, setName] = useState("0");
    let [email, setEmail] = useState("0");
    let [adress, setAdress] = useState("0");

    return <div>
        <p>formula</p>
        <p> {} </p>
        <form action="">
            <input type="text" placeholder='name'/>
            
            <input type="text" placeholder='email' />
            <p> </p>
            <input type="text" placeholder='adress' />
        </form>

    </div>
}