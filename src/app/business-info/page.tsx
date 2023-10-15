'use client'
import {useRouter} from 'next/navigation';
import {useForm} from 'react-hook-form';
import {CustomInput} from '../components/custom-input';
import Link from 'next/link';
import {ChevronRight, ChevronLeft} from 'lucide-react';
import CustomFileUpload from '../components/custom-file-input';
import {useRef} from 'react';
import {useRegisterContexxt} from '../contexts/register-context';

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
    const {dispatch, brandName, brandType, streetAddress, city, zipCode, taxIdNumber} = useRegisterContexxt()
    const submitBtnRef = useRef<HTMLButtonElement>(null)
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormData>({
        defaultValues: {
            brandName,
            brandType,
            streetAddress,
            city,
            zipCode,
            taxIdNumber
        }
    });
    const onSubmit = (data: FormData) => {
        const {brandName, brandType, zipCode, city, taxIdNumber} = data
        dispatch({
            type: 'update_brand_name',
            payload: brandName
        })
        dispatch({
            type: 'update_brand_type',
            payload: brandType
        })
        dispatch({
            type: 'update_zip_code',
            payload: zipCode
        })
        dispatch({
            type: 'update_city',
            payload: city
        })
        dispatch({
            type: 'update_tax_id_number',
            payload: taxIdNumber
        })
        router.push('/onboarding/connect')
    }

    return (
        <>
            <main className="flex max-h-[80vh] flex-col items-center bg-white  rounded-2xl shadow-2xl">
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
                <form onSubmit={handleSubmit(onSubmit)} className="w-full  overflow-y-auto grid mt-10 px-24 2xl:px-60 grid-cols-2 gap-6 items-center justify-between">
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
                        info
                        infoLabel='Local: Brand with distirbution of two or more thingy things will do a thingy thing'
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
                    <div className="flex items-center w-full justify-between col-span-2 gap-6">
                        <CustomFileUpload name="electronicallySign" placeholder='Electronically sign the documents' />
                        <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center p-1 text-white cursor-pointer">
                            <ChevronRight className="h-4 w-4 text-white" aria-hidden="true" />
                        </div>
                    </div>
                    <div className="flex items-center w-full justify-between col-span-2 gap-6">
                        <CustomFileUpload name="nonAdult" placeholder='Non adult beverage bodega in paris' />
                        <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center p-1 text-white cursor-pointer">
                            <ChevronRight className="h-4 w-4 text-white" aria-hidden="true" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <h3 className='text-[#73B4FC] text-lg uppercase col-span-2 mb-1'>coi pdf upload</h3>
                        <p className='col-span-2 text-gray-600'>Once the following documents are signed you will be ready to get started</p>
                    </div>
                    <div className="flex items-center w-full justify-between col-span-2 mb-4 gap-6">
                        <CustomFileUpload name="documents" placeholder='Electronically sign the documents' />
                        <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center p-1 text-white cursor-pointer">
                            <ChevronRight className="h-4 w-4 text-white" aria-hidden="true" />
                        </div>
                    </div>
                </form>
            </main>
            <div className="flex w-full mt-8 items-center justify-between">
                <button className='text-[#73B4FC]'>Back to login</button>
                <div className="flex items-center gap-8">
                    <button
                        className='flex items-center justify-center gap-2 border border-[#73B4FC] text-[#73B4FC] bg-white rounded py-2 px-4 min-w-[10rem]'
                    >
                        <ChevronLeft className="h-4 w-4 text-[#73B4FC]" aria-hidden="true" />
                        Previous step
                    </button>
                    <button
                        onClick={() => submitBtnRef?.current?.click()}
                        className='flex items-center justify-center gap-2 bg-gradient-to-r from-[#A4E1FF] to-[#73B4FC] text-white rounded py-2 px-4 min-w-[10rem]'
                    >
                        Next step
                        <ChevronRight className="h-4 w-4 text-white" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </>

    )
}
