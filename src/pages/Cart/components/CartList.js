import { useState } from "react"
import { CartCard } from "./CartCard"
import { Checkout } from "./Checkout"
import { useCart } from "../../../context"

export const CartList = () => {
  const [checkout, setCheckout] = useState(false);
  const { cartList, total } = useCart();

  return (

    <div>

      <section className="max-w-4xl m-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">

        <div className="text-center mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">My Cart ({cartList.length})</h5>
        </div>

        <div className="flow-root">

          <div className="divide-y divide-gray-200 dark:divide-gray-700">

            {cartList.map((product) => (
              <CartCard key={product.id} product={product} />
            ))}

          </div>

        </div>

      </section>

      <section className="max-w-4xl m-auto">

        <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
          <p className="flex justify-between my-2">
            <span className="font-semibold">Total Amount:</span>
            <span className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">${total}</span>
          </p>
        </div>

        <div className="text-right my-5">
          <button onClick={() => setCheckout(true)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
            PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
          </button>
        </div>

      </section>

      {checkout && <Checkout setCheckout={setCheckout} total={total} />}

    </div>

  )
}
