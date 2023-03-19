import { AddProduct } from "./AddProduct";
import { useState } from "react";
import { Product } from "./Product";

export function Products() {

    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    const html = products.map((product, i) => {
        return <Product product={product} key={i}/>;
    });

    return (<>
        <AddProduct addProduct={addProduct}></AddProduct>
        <p>{JSON.stringify(products)}</p>
        {html}
    </>);
}