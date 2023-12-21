/**
 * 
 * @param {Array} products 
 * @returns {Number}
 */

export const totalPrice = (products) => products.reduce((sum, product) => sum + product.price, 0)
