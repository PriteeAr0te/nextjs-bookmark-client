import { Eye, EyeOff } from "lucide-react"
import { useState } from "react";

const InputComponent = ({ label, type, placeholder, value, name, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='w-full flex flex-col'>
            <label htmlFor="name" className='text-gray-200 mb-2'>{label}</label>
            <div className="relative w-full">
                <input
                    className='w-full px-3 py-2 rounded-lg border border-br bg-secondary focus:outline-none focus:border-primary active:outline-none active:border-primary'
                    type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
                {type === 'password' && (
                    <span className='absolute right-3 cursor-pointer top-2.5 transform text-sm' onClick={() => { setShowPassword(!showPassword) }}>
                        {showPassword ? <Eye size={22} /> : <EyeOff size={22} />}
                    </span>
                )}
            </div>
        </div>
    )
}

export default InputComponent