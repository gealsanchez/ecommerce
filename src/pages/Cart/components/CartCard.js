import { Link } from "react-router-dom";
import { useCart } from "../../../context"

export const CartCard = ({ product }) => {
  const { removeFromCart, cartList, increaseQuantity } = useCart();

  function handleClick(product) {
    removeFromCart(product);
  }

  return (
    <div key={product.id} className="py-3 sm:py-4">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Link to={`/products/${product.id}`}>
            <img className="w-12 h-12 rounded" src={product.poster} alt="Product" />
          </Link>
        </div>
        <div className="flex-1 min-w-0 ms-4">
          <Link to={`/products/${product.id}`}>
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {product.name}
            </p>
          </Link>
        </div>

        <div className="flex items-center">

        </div>
        {console.log({ cartList })}
        <input onChange={(e) => increaseQuantity(product, Number(e.target.value))} type="number" id="number" className="disabled bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:bordeproductr-blue-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none      invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 mr-1" placeholder={product.order_quantity} required />

        <button onClick={() => handleClick(product)} className="text-sm font-medium text-red-400 truncate mx-4">Remove</button>

        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          ${product.price}
        </div>
      </div>
    </div>
  )
}
