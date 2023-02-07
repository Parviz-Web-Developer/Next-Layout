import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const signup = () => {
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:3030/users', {
            method: "POST", 
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(res => {
            if(res.className === "conflict") {
                toast(res.message)
            } else {
                router.push('/auth/login')
            }
        })
    };

	return (
		<div className="loginDiv">
		<div className="login" >
			<form onSubmit={handleSubmit(onSubmit)} >
				<h1>Register</h1>
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
				<div className="mb-6">
					<label
						htmlFor="password"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
					</label>
					<input
						type="text"
						id="text"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Enter your name"
                        {...register("name", { pattern: /^[A-Za-z]+$/i })}
					/>
				</div>
                {errors.exampleRequired && <span>This field is required</span>}
				<button
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Submit
				</button>
			</form>
            <ToastContainer />
		</div>
		</div>
	);
};


export default signup;
