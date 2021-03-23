import axios from "axios";
import PARAMS from "../data/params";
import {StorageKey} from "../data";

export default class API {

    static get(path, data, needAuth = false) {
        return new Promise((resolve, reject) => {
            if (needAuth) {
                const request = () => {
                    axios.get(PARAMS.API_ROOT + path, {headers: {Authorization: `Bearer ${API.getUserToken()}`}})
                        .then((response) => resolve(response.data))
                        .catch((error) => reject(error.response.data));
                }
                if (API.isTokenExpired()) request();
                else API.tokenRefresh().then(request).catch(console.error);
            } else {
                axios.get(PARAMS.API_ROOT + path)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error.response.data));
            }
        });

    }

    static post(path, data, needAuth = false) {
        return new Promise(function (resolve, reject) {
            if (needAuth) {
                const request = () => {
                    axios.post(PARAMS.API_ROOT + path, data, {headers: {Authorization: `Bearer ${API.getUserToken()}`}})
                        .then((response) => resolve(response.data))
                        .catch((error) => reject(error.response));
                }
                if (API.isTokenExpired()) request();
                else API.tokenRefresh().then(request).catch(console.error);

            } else {
                axios.post(PARAMS.API_ROOT + path, data)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error.response));
            }
        });

    }

    static tokenRefresh() {
        return new Promise(function (resolve, reject) {
            API.post('auth/token/refresh/', {refresh: API.getUserRefreshToken()})
                .then(({access}) => {
                    sessionStorage.setItem(StorageKey.str_userToken, access);
                    sessionStorage.setItem(StorageKey.str_userTokenExpiration, (new Date().getTime() + 5 * 60 * 1000).toString());
                    resolve("success");
                }).catch(reject);
        });
    }

    static getUserToken() {
        return sessionStorage.getItem(StorageKey.str_userToken);
    }

    static getUserRefreshToken() {
        return sessionStorage.getItem(StorageKey.str_userRefreshToken);
    }

    static isTokenExpired() {
        return new Date().getTime() < parseInt(sessionStorage.getItem(StorageKey.str_userTokenExpiration), 10)
    }

}
