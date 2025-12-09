"use client"
import LoginForm from '@/components/forms/LoginForm'
import { useLogin } from '@/hooks/useLogin'

const Page = () => {
    const { formData, error, handleChange, handleSubmit } = useLogin();

    return (
        <div className='w-full min-h-screen flex justify-center items-center bg-background text-white'>
            <LoginForm
                error={error}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default Page