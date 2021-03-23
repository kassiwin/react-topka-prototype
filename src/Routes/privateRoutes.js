import {Urls} from "../data";

import {Checkout, CheckoutDone, OrderHistory} from "../pages";


const privateRoutes = [
    {
        path: Urls.checkout.done,
        component: CheckoutDone
    },
    {
        path:Urls.checkout.base,
        component: Checkout
    },
    {
        path: Urls.order_history.base,
        component: OrderHistory
    }

];

export default privateRoutes;