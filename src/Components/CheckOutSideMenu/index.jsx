import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context/index";
import './styles.css'
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";


const CheckOutSideMenu = () => {

    const { isCheckOutSideMenuOpen, cartProducts, setCartProducts, order, setOrder, closeCheckOutSideMenu, setCount, setSearchByTitle } = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter((product) => product.id !== id)
        setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }
        setOrder([...order, orderToAdd])
        setCartProducts([])
        setCount(0)
        setSearchByTitle(null)
    }

    return (
        <aside className={`${isCheckOutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed bg-white right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>ShoppingCart</h2>

                <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={() => closeCheckOutSideMenu()}></XMarkIcon>
            </div>
            <div className="px-6 overflow-y-auto flex-1">

                {
                    cartProducts.map(({ title, price, id, images }) => (<OrderCard id={id} handleDelete={handleDelete} title={title} price={price} imgUrl={images[0]} key={id} />))
                }
            </div>
            <div className="px-6 mb-6">
                <p className="flex justify-between items-center mb-2">
                    <span className='font-light'>Total:</span>
                    <span className="font-medium text-2xl">${totalPrice(cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='py-3 w-full text-white bg-black rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export {
    CheckOutSideMenu
}