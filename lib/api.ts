export const api = async(url:string, options: RequestInit = {}) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    const res = await fetch (`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : '',
            ...(options.headers || {}),
        },
    });

    if(!res.ok) {
        throw new Error(`Api Error: ${res.status}`);
    }

    return res.json();
}