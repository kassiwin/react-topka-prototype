import React, {Component} from 'react';
import {API} from "../../helpers";
import {Urls} from "../../data";
import {Logo} from "../../components";
import {Link} from "react-router-dom";
import AuthForm from "./components/AuthForm";

class SignUp extends Component {
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

    onSignUp = (event) => {
        event.preventDefault();

        this.setState({error: null}, () => {
            const {username, password} = this.state;

            API.post('user/', {username, password})
                .then(() => {
                    this.setState({
                        success: "Your account was successfully created",
                        username: '',
                        password: '',
                        error: ''
                    }, () => {
                        this.props.history.push(Urls.auth.signin);
                    });
                }).catch((error) => {
                this.setState({error: error.message});
            });
        });
    };



    render() {
        const {error} = this.state;

        return (
            <div className="bg-black text-white h-screen w-full">
                <div className="flex flex-col items-start w-11/12 mx-auto h-full">
                    <div className="flex items-center justify-center w-full mt-6 flex-shrink">
                        <Logo classnames="text-4xl leading-8"/>
                    </div>
                    <div className="flex flex-col w-full flex-grow justify-center">
                        <div className="flex flex-col w-full flex-grow justify-center">
                            <div className="my-3 text-2xl font-bold">
                                Creer un compte
                            </div>
                            {error && <div className="text-red-300">{error}</div>}
                            <AuthForm
                                onSubmit={this.onSignUp}
                                onEnterDown={this.onEnterDown}
                                onInputChange={this.onInputChange}
                                submitButtonText="Creer"
                            />
                        </div>
                        <Link to={Urls.auth.signin}>
                            <div className="flex-shrink text-center py-4">
                                Connexion
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;