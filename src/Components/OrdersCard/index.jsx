import { ChevronRightIcon, ShoppingCartIcon, ClockIcon } from "@heroicons/react/24/solid"
const OrdersCard = ({ totalPrice, totalProducts }) => {

    return (
        <div className="flex justify-between items-center mb-4 border border-black rounded-lg w-80 p-4">
            <div className='flex justify-between w-full'>
                <p className="flex flex-col">

                    <span className="font-light flex items-center gap-2"><ClockIcon className="w-4 h-4 text-black" />01.02.23</span>
                    <span className="font-light flex items-center gap-2"><ShoppingCartIcon className="w-4 h-4 text-black" />{totalProducts} articles</span>
                </p>
                <p className="flex items-center gap-2">

                    <span className="font-medium text-2xl">${totalPrice}</span>
                    <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />

                </p>
            </div>
        </div>
    )
}

export default OrdersCard