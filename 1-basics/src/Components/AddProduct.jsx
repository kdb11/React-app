import { Item } from "./models/Item";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function AddProduct({ addProduct }) {
    const[product, SetProduct] = useState(new Item("", "", ""));
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log("product", product);
        addProduct(product);
        console.log(data); }

    const handleChange = (e) => {
        
        if (e.target.type === "text") { 
            SetProduct({...product, [e.target.name]: e.target.value});
        } 

        if (e.target.type === "number") {
            SetProduct({...product, [e.target.name]: +e.target.value});
        }
    };

    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("brand", { required: true, minLength: 3 })} value={product.brand} placeholder="Brand" onChange={handleChange} name="brand" />
        <>{errors.brand && (<span>should be at least 3 charachters</span>)}</>
        <input type="text" value={product.description} placeholder="Description" onChange={handleChange} name="description"/>
        <input type="number" value={product.price} placeholder="Price" onChange={handleChange} name="price"/>
        <input type="submit" value="Save item" />
        </form>
    </div>
}