import React, {useState, useEffect} from 'react'
import {Upload, Check, X} from 'lucide-react';
import cn from 'classnames'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    uploadIcon?: JSX.Element;
    name: string;
    classNames?: string;
}

type CustomInputProps = Omit<InputProps, 'className'>

const CustomFileUpload = ({uploadIcon, classNames, name, ...props}: CustomInputProps) => {
    const [fileSelected, setFileSelected] = React.useState<File>()


    const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        const fileList = e.target.files;

        if (!fileList) return;

        setFileSelected(fileList[0]);
    };

    const uploadFile = function (e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
        if (fileSelected) {
            const formData = new FormData();
            formData.append("image", fileSelected, fileSelected.name);
        }
    };

    return (
        <div className='w-full h-[48px] cursor-pointer p-4 relative bg-white border border-gray-200 focus-within:border-[#73B4FC] focus-within:ring-[#73B4FC] rounded-md outline-none ' tabIndex={100}>
            <input
                accept="image/* pdf"
                name={name}
                id={name}
                type="file"
                multiple={false}
                onChange={handleImageChange}
                className={cn(' opacity-0 border-none w-full z-10 absolute left-0 top-0 h-full outline-none block p-4 bg-[#f6f6f6] text-black', classNames)}
                {...props}
            />
            <span className='absolute text-gray-500 top-[50%] translate-y-[-50%] left-2 capitalize'>{fileSelected?.name ? fileSelected.name.length > 50 ? fileSelected.name.substring(0, 50) + "..." : fileSelected.name : props?.placeholder}</span>
            {
                fileSelected ? (
                    <Check className="h-6 w-6 text-green-500 absolute right-5 top-[50%] translate-y-[-50%]" aria-hidden="true" onClick={uploadFile} />
                ) : (
                    <X className="h-6 w-6 text-red-500 absolute right-5 top-[50%] translate-y-[-50%]" aria-hidden="true" onClick={uploadFile} />
                )
            }
        </div>
    )
}

export default CustomFileUpload