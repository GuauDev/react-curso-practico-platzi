import { useContext } from "react";
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";


function App() {
  const { setSearchByTitle, filteredItems } = useContext(ShoppingCartContext)

  const renderView = () => {
    if (filteredItems?.length > 0) {
      return (filteredItems?.map((item) => (
        <Card data={item} key={item.id} />
      )))
    } else {
      return (
        <p>There are no products </p>
      )
    }

  }

  return (
    <Layout>
      <div className="flex justify-center items-center relative w-80 mb-4">
        <h1 className='font-medium text-xl'>Exclusive Products </h1>
      </div>
      <input onChange={(event) => setSearchByTitle(event.target.value)} type="text" placeholder="Search product" className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none" />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}

      </div>
      <ProductDetail />
    </Layout>

  )
}

export default App
