"use client"

import { useRegister } from '@/hooks/useRegister'
import RegisterForm from '@/components/forms/RegisterForm'

const Page = () => {
    const { formData, error, handleChange, handleSubmit } = useRegister();

    return (
        <div className='w-full min-h-screen flex justify-center items-center bg-background text-white'>
            <RegisterForm
                formData={formData}
                error={error}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default Page