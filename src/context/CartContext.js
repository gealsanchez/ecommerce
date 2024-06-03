import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../reducers"
import { toast } from "react-toastify";

const cartInitialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartInitialState);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    function addToCart(product) {
        const updatedList = state.cartList.concat(product);
        const updatedTotal = state.total + product.price;

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedList,
                total: updatedTotal,
            }
        })
    }

    function removeFromCart(product) {
        const updatedTotal = state.total - product.price;
        const updatedList = state.cartList.filter(item => item.id !== product.id);

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    function increaseQuantity(product, number) {
        const actualAmount = product.price * product.order_quantity;
        const newAmount = product.price * number;

        const updatedTotal = () => {
            if (number > 0) {
                state.total = (state.total - actualAmount) + newAmount
            } else toast.error("Quantity cannot be zero")
            return state.total
        }

        const updatedList = state.cartList.map((item) => (
            item.id === product.id ? {
                id: product.id,
                name: product.name,
                overview: product.overview,
                long_description: product.long_description,
                price: product.price,
                poster: product.poster,
                image_local: product.image_local,
                rating: product.rating,
                in_stock: product.in_stock,
                size: product.size,
                best_seller: product.best_seller,
                order_quantity: number
            } : state.cartList
        ));

        dispatch({
            type: "INCREASE_QUANTITY",
            payload: {
                products: updatedList,
                total: updatedTotal()
            }
        })
    }

    function clearCart() {
        dispatch({
            type: "CLEAR_CART",
            payload: {
                products: [],
                total: 0
            }
        })
    }

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        increaseQuantity,
        clearCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}