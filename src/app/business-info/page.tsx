'use client'
import Image from 'next/image'
import {useRouter} from 'next/navigation';
import {useForm} from 'react-hook-form';
import {CustomInput} from '../components/custom-input';
import Link from 'next/link';
import CustomFileUpload from '../components/custom-file-input';

const NavPill = () => (
    <Link href='/' className="w-full flex items-center justify-center gap-4 bg-gradient-to-r from-[#A7E4FF] to-[#87C6FD] rounded-tl-2xl p-4 cursor-pointer">
        <div className="w-6 h-6 bg-white flex items-center justify-center text-[#73B4FC] rounded-full">
            1
        </div>
        <p>Your profile</p>
    </Link>
)


type FormData = {
    brandName: string,
    brandType: string,
    streetAddress: string,
    city: string,
    zipCode: string,
    taxIdNumber: string
};


export default function Page() {
    const router = useRouter()
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({});
    const onSubmit = (data: FormData) => {
        console.log(data)
        router.push('/onboarding/connect')
    }

    return (
        <main className="flex max-h-[80vh] overflow-y-auto flex-col items-center bg-white  rounded-2xl shadow-2xl">
            <div className='flex w-full items-center rounded-t-2xl bg-[#EEEFFD]'>
                <NavPill />
                <Link href='/business-info' className="w-full flex items-center justify-center rounded-r-full gap-4 bg-gradient-to-r from-[#87C6FD] to-[#6BAAFC] p-4  cursor-pointer">
                    <div className="w-6 h-6 bg-white flex items-center justify-center text-[#73B4FC] rounded-full">
                        2
                    </div>
                    <p>Business information</p>
                </Link>
                <div className="w-full flex items-center justify-center gap-4 bg-[#EEEFFD] p-4 cursor-pointer">
                    <div className="w-6 h-6 bg-[#BEC8E8] flex items-center justify-center text-[#EEEFFD] rounded-full">
                        3
                    </div>
                    <p className='text-[#BEC8E8]'>Confirmation page</p>
                </div>
            </div>
            <div className='gap-2 mt-8 flex flex-col items-center'>
                <h3 className='text-center text-[#BEC8E8]'>Step 2</h3>
                <h1 className='text-center text-[#516992] text-2xl font-semibold'>Business information</h1>
                <p className='text-center text-[#67728C] font-semibold'>Please enter information about your business</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full grid mt-10 px-24 2xl:px-60 grid-cols-2 gap-6 items-center justify-between">
                <h3 className='text-[#73B4FC] text-lg uppercase col-span-2'>General information</h3>
                <CustomInput
                    registration={register("brandName", {required: 'This is a required field'})}
                    placeholder="Input Brand name"
                    error={errors.brandName}
                    classNames="w-1/2"
                    label="Brand Name"
                    required
                />
                <CustomInput
                    registration={register("brandType", {required: 'This is a required field'})}
                    placeholder="Input brand type"
                    error={errors.brandType}
                    classNames="w-1/2"
                    label="Brand type"
                    required
                />
                <CustomInput
                    registration={register("streetAddress", {required: 'This is a required field'})}
                    placeholder="Input street address"
                    error={errors.streetAddress}
                    classNames="w-1/2"
                    label="street address"
                    required
                />
                <CustomInput
                    registration={register("city", {required: 'This is a required field'})}
                    placeholder="Input Phone number"
                    error={errors.city}
                    classNames="w-1/2"
                    label="Input city"
                    required
                />
                <CustomInput
                    registration={register("taxIdNumber", {required: 'This is a required field'})}
                    placeholder="Input tax id number"
                    error={errors.taxIdNumber}
                    classNames="w-1/2"
                    label="Tax ID Number"
                    required
                />
                <CustomInput
                    registration={register("zipCode", {required: 'This is a required field'})}
                    placeholder="Input Zip code"
                    error={errors.zipCode}
                    classNames="w-1/2"
                    label="Zip code"
                    required
                />
                <div className="col-span-2">
                    <h3 className='text-[#73B4FC] text-lg uppercase col-span-2 mb-1'>Documents</h3>
                    <p className='col-span-2 text-gray-600'>Once the following documents are signed you will be ready to get started</p>
                </div>
                <div className="flex items-center w-full justify-between col-span-2">
                    <CustomFileUpload name="documents" placeholder='Electronically sign the documents' />
                </div>
                <div className="flex items-center w-full justify-between col-span-2">
                    <CustomFileUpload name="documents" placeholder='Non adult beverage bodega in paris' />
                </div>
                <div className="col-span-2">
                    <h3 className='text-[#73B4FC] text-lg uppercase col-span-2 mb-1'>coi pdf upload</h3>
                    <p className='col-span-2 text-gray-600'>Once the following documents are signed you will be ready to get started</p>
                </div>
                <div className="flex items-center w-full justify-between col-span-2 mb-4">
                    <CustomFileUpload name="documents" placeholder='Electronically sign the documents' />
                </div>
            </form>
        </main>
    )
}
