export function Cart() {
    const MyProducts = [
        {
            brand:'Mircidec', 
            description:'virri najs, fast etc',
            price: 'for you my friend good price!'
        }, 
        {
            brand:'Bi m double v', 
            description:'strong horse power',
            price: 'tell me best price?'
        }, 
        {
            brand:'Aoudi', 
            description:'2025 limited edition, gold plated',
            price: '1.9 million dirham'
        }, 
    ];

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