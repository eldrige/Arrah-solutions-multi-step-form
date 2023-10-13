'use client'
import Image from 'next/image'
import {useRouter} from 'next/navigation';
import {useForm} from 'react-hook-form';
import {CustomInput} from './components/custom-input';

const NavPill = () => (
  <div className="w-full flex items-center justify-center gap-4 bg-[#73B4FC] p-4 rounded-r-full shadow-lg  cursor-pointer">
    <div className="w-6 h-6 bg-white flex items-center justify-center text-[#73B4FC] rounded-full">
      1
    </div>
    <p>Your profile</p>
  </div>
)


type FormData = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phoneNumber: string,
  confirmPassword: string
};


export default function Home() {
  const router = useRouter()
  const {register, handleSubmit, formState: {errors}} = useForm<FormData>({});
  const onSubmit = (data: FormData) => {
    console.log(data)
    router.push('/business-info')
  }

  return (
    <main className="flex min-h-[80vh] flex-col items-center bg-white  rounded-2xl shadow-2xl">
      <div className='flex w-full items-center rounded-t-2xl bg-[#EEEFFD]'>
        <NavPill />
        <div className="w-full flex items-center justify-center gap-4 bg-[#EEEFFD] p-4 cursor-pointer">
          <div className="w-6 h-6 bg-[#BEC8E8] flex items-center justify-center text-[#EEEFFD] rounded-full">
            2
          </div>
          <p className='text-[#BEC8E8]'>Business Information</p>
        </div>
        <div className="w-full flex items-center justify-center gap-4 bg-[#EEEFFD] p-4 cursor-pointer">
          <div className="w-6 h-6 bg-[#BEC8E8] flex items-center justify-center text-[#EEEFFD] rounded-full">
            3
          </div>
          <p className='text-[#BEC8E8]'>Confirmation page</p>
        </div>
      </div>
      <div className='gap-2 mt-8 flex flex-col items-center'>
        <h3 className='text-center text-[#BEC8E8]'>Step 1</h3>
        <h1 className='text-center text-[#516992] text-2xl font-semibold'>Your profile</h1>
        <p className='text-center text-[#67728C] font-semibold'>Enter the login information for your account.  You will <br /> be able to create additional users after registering</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full grid mt-10 px-24 grid-cols-2 gap-6 items-center justify-between">
        <CustomInput
          registration={register("firstName", {required: 'This is a required field'})}
          placeholder="First name"
          error={errors.firstName}
          classNames="w-1/2"
          label="First Name*"
        />
        <CustomInput
          registration={register("lastName", {required: 'This is a required field'})}
          placeholder="First name"
          error={errors.lastName}
          classNames="w-1/2"
          label="Last Name*"
        />
        <CustomInput
          registration={register("email", {required: 'This is a required field'})}
          placeholder="Email"
          error={errors.email}
          classNames="w-1/2"
          label="Email *"
        />
        <CustomInput
          registration={register("phoneNumber", {required: 'This is a required field'})}
          placeholder="Phone number"
          error={errors.phoneNumber}
          classNames="w-1/2"
          label="Phone number*"
        />
        <CustomInput
          registration={register("password", {required: 'This is a required field'})}
          placeholder="Password"
          error={errors.password}
          classNames="w-1/2"
          label="Password *"
        />
        <CustomInput
          registration={register("confirmPassword", {required: 'This is a required field'})}
          placeholder="Confirm password"
          error={errors.confirmPassword}
          classNames="w-1/2"
          label="Confirm password *"
        />
      </form>
    </main>
  )
}
