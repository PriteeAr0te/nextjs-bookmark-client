"use client"

import { Bookmark } from 'lucide-react'
import React, { useState } from 'react'
import InputComponent from '../../../components/ui/InputComponent'
import Checkbox from '../../../components/ui/Checkbox'
import { api, setAuthToken } from '@/lib/api'
import { setToken } from '@/lib/auth'
import { useRouter } from 'next/navigation'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

const Page = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await api.post('/auth/signin', formData);
            const token = res.data.token;

            setToken(token);
            setAuthToken(token);

            toast.success("Login Success");
            router.push('/dashboard/bookmarks');
        } catch (err) {
            const error = err as AxiosError<{ message: string }>;
            toast.error("Login Failed");
            setError(error.response?.data?.message || "Login Failed");
        }
    };


    return (
        <div className='w-full min-h-screen flex justify-center items-center bg-background text-white'>
            <form
                onSubmit={handleSubmit}
                className='w-full md:max-w-2xl lg:max-w-xl xl:max-w-lg'>
                <div className='flex justify-center gap-y-3 items-center flex-col '>
                    <span className='p-2 rounded-lg text-white bg-primary'>
                        <Bookmark fill='white' />
                    </span>
                    <h2 className='text-3xl text-white font-semibold text-center'>Log in to your account</h2>
                    <p className='text-gray-400 text-center'>Welcome back. please enter your details</p>
                </div>
                <div className='mt-6 w-full space-y-4'>
                    <InputComponent label='Email' type='email' placeholder='Enter your email' value={formData.email} name='email' onChange={handleChange} />

                    <InputComponent label='Password' type='password' placeholder='Enter your password' value={formData.password} name='password' onChange={handleChange} />
                </div>
                <div className='flex w-full justify-between items-center mt-2'>
                    <span className='flex gap-1 items-center'>
                        <Checkbox label="Remember Me" onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e)} />
                    </span>
                    <p className='text-sm text-gray-400'>Forgot Password?</p>
                </div>

                <button
                    type='submit'
                    className='mt-6 w-full py-2 px-3 mx-auto text-center text-white bg-primary hover:text-primary border border-primary hover:bg-transparent transition-all ease-in-out duration-200 rounded-lg cursor-pointer'>
                    Log In
                </button>
                {error && <p className='text-red-500 mt-2'>{error}</p>}
            </form>
        </div>
    )
}

export default Page