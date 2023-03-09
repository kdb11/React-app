export function Products() {
    const MyProducts = [{ }, { }, { }];

    const Html = MyProducts.map((MyProduct) => {
        return (<div key={MyProduct.id}>
        <p>{MyProduct.brand}</p>
        <p>{MyProduct.description}</p>
        <p>{MyProduct.price}</p>
    </div>)
    });

    return (<>
        {Html}
    </>);
}