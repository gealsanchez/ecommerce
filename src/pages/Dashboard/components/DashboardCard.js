import { Link } from "react-router-dom"

export const DashboardCard = ({ order }) => {
    return (

        <section className="max-w-4xl m-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-4">

            <div className="flex items-center justify-between mb-4 p-5">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Order Id: {order.id}</h5>
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Date: {order.time}</h5>
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Total: ${order.amount_paid}</h5>
            </div>

            <div className="flow-root">

                <ul className="divide-y divide-gray-200 dark:divide-gray-700">

                    {order.cartList.map((product) => (
                        <li key={product.id} className="py-3 sm:py-4">
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

                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    ${product.price}
                                </div>
                            </div>
                        </li>
                    ))}

                </ul>

            </div>

        </section>

    )
}
