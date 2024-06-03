import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Search } from "../Sections/Search";
import { DropdownLoggedOut, DropdownLoggedIn } from "../../components"
import { useCart } from "../../context";

export const Header = () => {
    const [darkMode, setDarkMode] = useState((JSON.parse(localStorage.getItem("darkMode"))) || false);
    const [searchSection, setSearchSection] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const token = JSON.parse(sessionStorage.getItem("token"));
    const {cartList }= useCart();

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode))
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode]);

    return (
        <header>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">

                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-incognito text-xl text-gray-700 dark:text-white mr-5" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="m4.736 1.968-.892 3.269-.014.058C2.113 5.568 1 6.006 1 6.5 1 7.328 4.134 8 8 8s7-.672 7-1.5c0-.494-1.113-.932-2.83-1.205l-.014-.058-.892-3.27c-.146-.533-.698-.849-1.239-.734C9.411 1.363 8.62 1.5 8 1.5s-1.411-.136-2.025-.267c-.541-.115-1.093.2-1.239.735m.015 3.867a.25.25 0 0 1 .274-.224c.9.092 1.91.143 2.975.143a30 30 0 0 0 2.975-.143.25.25 0 0 1 .05.498c-.918.093-1.944.145-3.025.145s-2.107-.052-3.025-.145a.25.25 0 0 1-.224-.274M3.5 10h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5m-1.5.5q.001-.264.085-.5H2a.5.5 0 0 1 0-1h3.5a1.5 1.5 0 0 1 1.488 1.312 3.5 3.5 0 0 1 2.024 0A1.5 1.5 0 0 1 10.5 9H14a.5.5 0 0 1 0 1h-.085q.084.236.085.5v1a2.5 2.5 0 0 1-5 0v-.14l-.21-.07a2.5 2.5 0 0 0-1.58 0l-.21.07v.14a2.5 2.5 0 0 1-5 0zm8.5-.5h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5" />
                        </svg>
                        <span className="ml-0 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">#Incognito</span>
                    </Link>

                    <div className="flex items-center relative">
                        <span onClick={() => setDarkMode(!darkMode)} className="bi bi-gear-wide-connected cursor-pointer text-xl text-gray-700 dark:text-white mr-5"></span>
                        <span onClick={() => setSearchSection(!searchSection)} className="bi bi-search cursor-pointer text-xl text-gray-700 dark:text-white mr-5"></span>

                        <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                            <span className="text-2xl bi bi-cart-fill relative">
                                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                            </span>
                        </Link>

                        <span onClick={() => setDropdown(!dropdown)} className="bi bi-person-circle cursor-pointer text-xl text-gray-700 dark:text-white mr-5"></span>
                        {dropdown && (token ? <DropdownLoggedIn setDropdown={setDropdown} /> : <DropdownLoggedOut setDropdown={setDropdown} />)}
                    </div>
                </div>
            </nav>
            {searchSection && <Search setSearchSection={setSearchSection} />}
        </header>
    )
}
