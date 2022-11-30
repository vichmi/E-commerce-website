
export function getProducts() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

export function addProduct(item) {
    const products = getProducts();
    let productIndex = products.findIndex(p => p.id == item.id);
    console.log(productIndex)
    if(productIndex != -1) {return;}

    products.push(item);

    localStorage.setItem('cart', JSON.stringify(products));
}


export function removeProduct(item) {
    let products = getProducts();
    console.log(products);
    products = products.filter(p => p.id != item.id);
    console.log(products);
    localStorage.setItem('cart', JSON.stringify(products));
}