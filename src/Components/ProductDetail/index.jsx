import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
const ProductDetail = () => {
    const { isProductDetailOpen, closeProductDetail, productToShow } = useContext(ShoppingCartContext)
    const { images, title, price, description } = productToShow

    return(
        <aside className={`${isProductDetailOpen? 'flex': 'hidden'} product-detail flex flex-col fixed bg-white right-0 border border-black rounded-lg` }>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>

                <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={()=>{closeProductDetail(); }}></XMarkIcon>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' src={images?.[0]} alt={title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium font-2xl'>
                    ${price}
                </span>
                <span className='font-medium font-md'>
                    {title}
                </span>
                <span className='font-light font-sm'>
                    {description}
                </span>
            </p>
        </aside>
    )
}

export default ProductDetail