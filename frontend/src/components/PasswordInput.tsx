import React from 'react'
import { Input } from './ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff } from 'lucide-react'

interface PasswordInputProps {
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
}

function PasswordInput({ value, onChange, placeholder }: PasswordInputProps) {
    const [isShowPassword, setIsShowPassword] = React.useState(false);
    
    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    }

    return (
        <div className='space-y-2'>
            <Label>Senha</Label>
            <div className='relative'>
                <Input
                    type={isShowPassword ? 'text' : 'password'}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder || 'Insira sua senha'}
                    className='w-full pr-10'
                />
                <div 
                    onClick={toggleShowPassword}
                    className='absolute right-2 top-2 cursor-pointer'
                >
                    {isShowPassword ? <EyeOff /> : <Eye />}
                </div>
            </div>
        </div>
    )
}

export default PasswordInput
