import Detail from "./pages/Detail.vue"
import Shipping from "./pages/Shipping.vue"

export default [
    {
        path: "/",
        name: "detail",
        component: Detail,
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
    }
];