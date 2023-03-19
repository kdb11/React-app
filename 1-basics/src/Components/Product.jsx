export function Product({ product }) {
    return <div>
        <h1>{product.brand}</h1>
        <h2>{product.description }</h2>
        <h2>{product.price}</h2>
    </div>
}