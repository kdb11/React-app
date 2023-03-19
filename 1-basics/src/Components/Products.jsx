import { Item } from "./models/Item";
import { AddProduct } from "./AddProduct";
import { useState } from "react";

export function Products() {

    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    return (<>
        <AddProduct addProduct={addProduct}></AddProduct>
        <p>{JSON.stringify(products)}</p>
    </>);
}