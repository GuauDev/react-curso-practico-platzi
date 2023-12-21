import { useContext } from "react"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'
    const { count, setSearchByCategory } = useContext(ShoppingCartContext)

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/">
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        onClick={() => setSearchByCategory()}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clothes" className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => setSearchByCategory('clothes')}

                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={() => setSearchByCategory('electronics')}

                        to="/electronics"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={() => setSearchByCategory('furniture')}

                        to="/furnitures"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Furnitures
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/toys" className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => setSearchByCategory('toys')}
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={() => setSearchByCategory('others')}
                        to="/others" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Others
                    </NavLink>
                </li>

            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    jsreyes979@gmail.com
                </li>
                <li>
                    <NavLink to="/my-orders" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-account" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sign-in" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex">
                    <ShoppingBagIcon className="w-6 h-6 text-black"></ShoppingBagIcon> {count}
                </li>



            </ul>
        </nav>
    )
}

export default Navbar