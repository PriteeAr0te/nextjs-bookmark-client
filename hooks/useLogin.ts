import { setAuthToken } from "@/lib/api";
import { setToken } from "@/lib/auth";
import { login } from "@/services/auth";
import { loginSchema } from "@/validation/loginSchema";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { ZodError } from "zod";

export function useLogin() {
    const router = useRouter();
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

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

            loginSchema.parse(formData);

            const res = await login(formData);
            const token = res.data.token;

            setToken(token);
            setAuthToken(token);

            router.push('/bookmarks');
            toast.success("Login Success");
        } catch (err) {
            if (err instanceof ZodError) {
                const zodErrorMessage = err.issues?.[0]?.message ?? "Validation failed";
                setError(zodErrorMessage);
                toast.error(zodErrorMessage);
                return;
            }

            const axiosError = err as AxiosError<{ message: string }>;
            const message = axiosError.response?.data?.message || "Login Failed";
            setError(message);
            toast.error(message);
        }
    };

    return { formData, error, handleChange, handleSubmit }
}
