import { useContext } from "react"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

function MyOrders() {
    const { order } = useContext(ShoppingCartContext)

    return (
        <Layout>
            <div className="flex w-80 items-center relative justify-center mb-4">

                <h1 className="font-medium text-xl">My orders</h1>
            </div>
            {order.map(({ totalPrice, totalProducts }, index) => (
                <Link to={`/my-orders/${index}`} key={index}>

                    <OrdersCard totalPrice={totalPrice} totalProducts={totalProducts} />
                </Link>
            ))}
        </Layout>
    )
}

export default MyOrders