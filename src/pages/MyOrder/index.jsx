import Layout from "../../Components/Layout"
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index";
import OrderCard from "../../Components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
function MyOrder() {
    const { order } = useContext(ShoppingCartContext)
    const pathName = window.location.pathname
    let index = pathName.substring((pathName.lastIndexOf('/') + 1))
    if (index === 'last') index = order.length - 1
    return (
        <Layout>
            <div className="flex w-80 items-center relative justify-center mb-6">
                <Link to="/my-orders" className="absolute left-0">
                    <ChevronLeftIcon className="h-6 w-6 color-black cursor-pointer" />
                </Link>
                <h1>My order</h1>
            </div>
            <div className="flex flex-col w-80">

                {
                    order?.[index]?.products?.map(({ title, price, id, images }) => (
                        <OrderCard
                            id={id}
                            title={title}
                            price={price}
                            imgUrl={images[0]}
                            key={id} />
                    ))
                }
            </div>
        </Layout>
    )
}

export default MyOrder 