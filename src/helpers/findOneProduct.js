

export const findOneProduct = ( products = [], id )=>{
    const product = products.filter( product => product.id === id)
    return product
}