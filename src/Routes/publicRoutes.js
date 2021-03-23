import {Urls} from "../data";
import {Auth, Home} from "../pages";

const publicRoutes = [
    {
        path: Urls.auth.signin,
        component: Auth.SignIn,
    },
    {
        path: Urls.auth.signup,
        component: Auth.SignUp,
    },
    {
        path: Urls.home.base,
        component: Home
    }
];

export default publicRoutes;