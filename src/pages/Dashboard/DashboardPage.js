import { useEffect, useState } from "react"
import { DashboardCard } from "./components/DashboardCard"
import { DashboardEmpty } from "./components/DashboardEmpty"
import { getUserOrders } from "../../services";
import { useTitle } from "../../hooks/useTitle";
import { toast } from "react-toastify";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  useTitle("Dashboard");

  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await getUserOrders();
        setOrders(data);
      } catch (error) {
        toast.error(error.message,)
      }

    }
    fetchOrders();
  }, [])

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10">My Dashboard ({orders.length})</p>
      </section>

      {/* <section>
        {orders.length ? orders.map((order) => (
          <DashboardCard key={order.id} order={order} />
        )) : <DashboardEmpty />}
      </section> */}

      <div className="flow-root">

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">

          {orders.length ? orders.map((order) => (
            <DashboardCard key={order.id} order={order} />
          )) : <DashboardEmpty />}

        </ul>

      </div>

    </main>
  )
}
