import Home from "./pages/Home.vue"
import Detail from "./pages/Detail.vue"
import Shipping from "./pages/Shipping.vue"
import ShippingList from "./pages/ShippingList.vue"

export default [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/home",
        name: "home",
        component: Home,
    },
    {
        path: "/detail",
        name: "detail",
        component: Detail,
    },
    {
        path: "/shipping",
        name: "shipping",
        component: Shipping,
    },
    {
        path: "/shippinglist",
        name: "shippinglist",
        component: ShippingList,
    }
];