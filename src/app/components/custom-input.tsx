import {UseFormRegisterReturn} from 'react-hook-form';
import cn from 'classnames'
import {HelpCircle} from 'lucide-react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    showIcon?: JSX.Element;
    classNames?: string;
    error?: any;
    registration?: Partial<UseFormRegisterReturn>;
    label: string,
    info?: boolean,
    infoLabel?: string,
}


type CustomInputProps = Omit<InputProps, 'className'>

export const CustomInput = ({type = "text", classNames = "", registration, error, label, required, info, infoLabel, ...rest}: CustomInputProps) => {
    return (
        <div className='w-full flex flex-col'>
            <label
                htmlFor={label}
                className='text-[#67728C] mb-2 flex items-center gap-1'>
                {label}
                {required && <span className='text-[#73B4FC]'>*</span>}
                {
                    info ?
                        <button title={infoLabel} type="button">
                            <HelpCircle className="h-5 w-5 text-gray-600 cursor-pointer" aria-hidden="true" />
                        </button> : null
                }
            </label>
            <input
                type={type}
                className={cn('focus:ring-[#73B4FC]  focus:border-[#73B4FC] rounded-md border-none w-full outline-none block p-[12px] sm:p-4 ring-1 ring-gray-200 text-black',
                    error && 'focus:ring-red-500  focus:border-red-500 border-2 border-red-500',
                    classNames)}
                {...registration}
                {...rest}
            />
            <div role="alert" aria-label={error?.message} className='text-xs text-red-500'>
                {error?.message}
            </div>
        </div>
    )
}

CustomInput.displayName = 'CustomInput'
