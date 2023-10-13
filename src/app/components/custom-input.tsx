import {UseFormRegisterReturn} from 'react-hook-form';
import cn from 'classnames'
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    showIcon?: JSX.Element;
    classNames?: string;
    error?: any;
    registration?: Partial<UseFormRegisterReturn>;
    label: string
}


type CustomInputProps = Omit<InputProps, 'className'>

export const CustomInput = ({type = "text", classNames = "", registration, error, label, ...rest}: CustomInputProps) => {
    return (
        <div className='w-full flex flex-col'>
            <label htmlFor={label} className='text-[#67728C] mb-2'>{label}</label>
            <input
                type={type}
                className={cn('focus:ring-[#73B4FC]  focus:border-[#73B4FC] rounded-md border-none w-full outline-none block p-[12px] sm:p-4 ring-1 ring-gray-200 text-black',
                    error && 'focus:ring-red-500  focus:border-red-500 border-2 border-red-500',
                    classNames)}
                {...registration}
                {...rest}
            />
            <div role="alert" aria-label={error?.message} className='text-xs text-error'>
                {error?.message}
            </div>
        </div>
    )
}

CustomInput.displayName = 'CustomInput'
