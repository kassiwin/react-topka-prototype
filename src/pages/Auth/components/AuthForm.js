import React from 'react';

const AuthForm = ({onSubmit, onEnterDown, onInputChange, submitButtonText, type}) => {
    return (
        <form className="w-full" onSubmit={onSubmit}>
            <div className="w-full">
                <label className="mb-3 block font-medium" htmlFor="username">
                    Username
                </label>
                <input
                    id="username"
                    type="text"
                    required
                    className="rounded py-2 px-5 w-full bg-black-lightest focus:outline-none focus:ring focus:border-black-lightest"
                    onChange={({target}) => onInputChange("username", target.value)}/>
            </div>
            <div className="my-6 w-full">
                <label className="mb-3 block font-medium" htmlFor="password">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    required
                    className="rounded py-2 px-5 w-full bg-black-lightest focus:outline-none focus:ring focus:border-black-lightest"
                    onKeyPress={onEnterDown}
                    onChange={({target}) => onInputChange("password", target.value)}
                />
                {
                    type === 'login' &&
                    <div className="mt-3 cursor-pointer">
                        Forgot your password ?
                    </div>
                }
            </div>
            <button className="w-full text-black-dark bg-blue py-3 text-center rounded-md text-medium mt-5" type="submit">
                {submitButtonText}
            </button>
        </form>
    );
};

export default AuthForm;