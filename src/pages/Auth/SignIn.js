import React, {Component} from 'react';
import {API} from "../../helpers";
import {StorageKey, Urls} from "../../data";
import {Logo} from "../../components";
import {Link} from "react-router-dom";
import AuthForm from "./components/AuthForm";

export default class SignIn extends Component {

    state = {
        username: '',
        password: '',
        error: '',
        success: null,
    };

    onInputChange = (key, value) => {
        this.setState({[key]: value});
    };

    onEnterDown = (e) => {
        if (e.key === 'Enter') {
            this.setState({error: null}, this.onLogin);
        }
    };

    onLogin = (event) => {
        event.preventDefault();

        this.setState({error: null}, () => {
            const {username, password} = this.state;

            API.post('auth/token/', {username, password})
                .then(({access, refresh}) => {
                    this.setState({
                        success: "SignIn successfull",
                        username: '',
                        password: '',
                        error: '',
                        loading: false
                    }, () => {
                        sessionStorage.setItem(StorageKey.str_userToken, access);
                        sessionStorage.setItem(StorageKey.str_userRefreshToken, refresh);
                        sessionStorage.setItem(StorageKey.str_userTokenExpiration, (new Date().getTime() + 5 * 60 * 1000).toString())
                        this.props.history.push(Urls.home.base);
                    });
                }).catch(() => {
                this.setState({loading: false, error: 'Invalid Username/Password'});
            });
        });
    };


    render() {
        const {error} = this.state;

        return (
            <div className="bg-black text-white h-screen w-full">
                <div className="flex flex-col items-start w-11/12 mx-auto h-full">
                    <div className="flex items-center justify-center w-full mt-6 flex-shrink">
                        <Link to={Urls.home.base}>
                            <Logo classnames="text-4xl leading-8"/>
                        </Link>

                    </div>
                    <div className="flex flex-col w-full flex-grow justify-center">
                        <div className="flex flex-col w-full flex-grow justify-center">
                            <div className="mb-5 text-3xl font-bold">
                                Se connecter
                            </div>
                            {error && <div className="text-red-300 text-center">{error}</div>}
                            <AuthForm
                                onSubmit={this.onLogin}
                                onEnterDown={this.onEnterDown}
                                onInputChange={this.onInputChange}
                                submitButtonText="Connexion"
                                type="login"
                            />
                        </div>
                        <Link to={Urls.auth.signup}>
                            <div className="flex-shrink text-center py-4">
                                Creer un compte
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
