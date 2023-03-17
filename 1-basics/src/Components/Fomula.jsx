import { useState } from 'react'
import { User } from './models/User.js';
import { Adress } from './models/Adress.js';

export function Formula() {

    const [user, setUser] = useState(new User("", "", "", new Adress("", "", "")));

    const HandleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value})
    }

    const HandleAdressChange = (e) => {
        setUser({ ...user, adress: {...user.adress, [e.target.name]: e.target.value }})
    };

/*     let [name, setName] = useState("0");
    let [email, setEmail] = useState("0");
    let [adress, setAdress] = useState("0"); */

    return <div>
        <p>formula</p>
        <form action="">
            <input type="text" placeholder='name' value={user.name} onChange={HandleChange} name="name" />
            <p> {JSON.stringify(user)} </p>
            <input type="text" placeholder='email' value={user.email} onChange={HandleChange} name="email"/>
            <p> </p>
            <input type="text" placeholder='adress' value={user.adress} onChange={HandleChange} name="adress"/>
            
            <input type="text" placeholder='street' value={user.adress.street} onChange={HandleAdressChange} name="street" />
            <p></p>
            <input type="text" placeholder='zip' value={user.adress.zip} onChange={HandleAdressChange} name="zip"/>
            <p> </p>
            <input type="text" placeholder='city' value={user.adress.city} onChange={HandleAdressChange} name="city"/>
        </form>

    </div>
}