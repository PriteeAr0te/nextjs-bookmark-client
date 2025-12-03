"use client"

import { Bookmark } from 'lucide-react'
import React, { useState } from 'react'
import InputComponent from '../../../components/ui/InputComponent'
import { api, setAuthToken } from '@/lib/api'
import { setToken } from '@/lib/auth'
import { useRouter } from 'next/navigation'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

const Page = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
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
            const res = await api.post('/auth/signup', formData);
            const token = res.data.token;

            setToken(token);
            setAuthToken(token);

            toast.success("Register Success");
            router.push('/dashboard/bookmarks');
        } catch (err) {
            const error = err as AxiosError<{ message: string }>;
            toast.error("Register Failed");
            setError(error.response?.data?.message || "Register Failed");
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
                    <h2 className='text-3xl text-white font-semibold text-center'>Create your account</h2>
                    <p className='text-gray-400 text-center'>Create your account to proceed further</p>
                </div>
                <div className='mt-6 w-full space-y-4'>
                    <InputComponent label='First Name' type='text' placeholder='Enter your first name' value={formData.firstName} name='firstName' onChange={handleChange} />

                    <InputComponent label='Last Name' type='text' placeholder='Enter your last name' value={formData.lastName} name='lastName' onChange={handleChange} />

                    <InputComponent label='Email' type='email' placeholder='Enter your email' value={formData.email} name='email' onChange={handleChange} />

                    <InputComponent label='Password' type='password' placeholder='Enter your password' value={formData.password} name='password' onChange={handleChange} />
                </div>

                <button
                    type='submit'
                    className='mt-6 w-full py-2 px-3 mx-auto text-center text-white bg-primary hover:text-primary border border-primary hover:bg-transparent transition-all ease-in-out duration-200 rounded-lg cursor-pointer'>
                    Register
                </button>
                {error && <p className='text-red-500 mt-2'>{error}</p>}
            </form>
        </div>
    )
}

export default Page