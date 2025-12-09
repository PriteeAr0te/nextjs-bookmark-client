import { api } from "@/lib/api"

export const login = (data: { email: string, password: string }) => {
    return api.post('/auth/signin', data)
}

export const register = (data: {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}) => {
    return api.post('/auth/signup', data)
}