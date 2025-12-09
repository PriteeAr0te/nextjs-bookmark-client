import { setAuthToken } from "@/lib/api";
import { setToken } from "@/lib/auth";
import { register } from "@/services/auth";
import { registerSchema } from "@/validation/registerSchema";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { ZodError } from "zod";

export function useRegister() {
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
            registerSchema.parse(formData);

            const res = await register(formData);
            const token = res.data.token;

            setToken(token);
            setAuthToken(token);

            toast.success("Register Success");
            router.push('/bookmarks');
        } catch (err) {
            if (err instanceof ZodError) {
                const zodErrorMessage = err.issues?.[0]?.message ?? "Validation failed";
                setError(zodErrorMessage);
                toast.error(zodErrorMessage);
                return;
            }

            const axiosError = err as AxiosError<{ message: string }>;
            const message = axiosError.response?.data?.message || "Register Failed"
            setError(message);
            toast.error(message);
        }
    };

    return { formData, error, handleChange, handleSubmit }
}