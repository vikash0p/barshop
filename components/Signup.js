"use client"
import React, { useReducer } from 'react';
import { toast } from 'react-toastify';

// Define the initial state for the form
const initialState = {
    username: '',
    email: '',
    password: '',
};

// Define the reducer function to manage state updates
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FIELD':
            return { ...state, [action.field]: action.value };
        default:
            return state;
    }
};

const Signup = () => {
    // Initialize state using useReducer
    const [state, dispatch] = useReducer(reducer, initialState);

    // Handle form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'SET_FIELD', field: name, value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your signup logic here
        console.log('Form data:', state);

        toast.success('Successfull submit', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    return (
        <div className="min-h-screen  text-black flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full  space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Sign up for an account</h2>
                </div>
                <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
                    <div className="  space-y-6">
                        <div>
                            <label htmlFor="username" className="sr-only">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border focus:outline-none focus:ring-yellow focus:border-yellow focus:z-10 sm:text-sm"
                                placeholder="Username"
                                value={state.username}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border focus:outline-none focus:ring-yellow focus:border-yellow focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={state.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border focus:outline-none focus:ring-yellow focus:border-yellow focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={state.password}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow hover:bg-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
