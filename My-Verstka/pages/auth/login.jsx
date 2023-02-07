import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

const login = () => {
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        data = {...data, strategy: "local"}

        fetch('http://localhost:3030/authentication', {
            method: "POST", 
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(res => {
            if(res.accessToken) {
				if(typeof window !== undefined) {
					localStorage.setItem('exp-data', res?.authentication?.payload?.exp)
				}
				Cookies.set('JWT', res.accessToken)
				Cookies.set('loggedin', true)
				router.push('/me')
            }
        })
    };

	return (
		<div className="loginDiv">
		<div className="login" >
			<form onSubmit={handleSubmit(onSubmit)} >
				<h1>Login</h1>
				<div className="mb-6">
					<label
						htmlFor="email"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						
					</label>
					<input
						type="email"
						id="email"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Enter your e-mail"
                        {...register('email')}
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="password"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						
					</label>
					<input
						type="password"
						id="password"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Enter your password"
                        {...register('password')}
					/>
				</div>
				<button
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Submit
				</button>
			</form>
		</div>
		</div>
	);
};


export default login;
