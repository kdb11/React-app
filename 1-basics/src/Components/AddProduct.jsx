import { Item } from "./models/Item";
import { useState } from "react";

export function AddProduct({ addProduct }) {
    const[product, SetProduct] = useState(new Item("", "", 0));

    const HandleChange = (e) => {
        
        if (e.target.type ==="text") { 
            SetProduct({...product, [e.target.name]: e.target.value});
        } 

        if (e.target.type ==="number") {
            SetProduct({...product, [e.target.name]: +e.target.value});
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("product", product.price.type);
        addProduct(product);
    }


    return <div>
        <form onSubmit={handleSubmit}>
        <input type="text" value={product.brand} placeholder="Brand" onChange={HandleChange} name="brand"/>
        <input type="text" value={product.description} placeholder="Description" onChange={HandleChange} name="description"/>
        <input type="text" value={product.price} placeholder="Price" onChange={HandleChange} name="price"/>
        <button type="submit">Save item</button>
        </form>
    </div>
}