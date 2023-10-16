'use client'
import {useRouter} from 'next/navigation';
import {useForm} from 'react-hook-form';
import {CustomInput} from './components/custom-input';
import Link from 'next/link';
import {useRef} from 'react';
import {useRegisterContexxt} from './contexts/register-context';

const NavPill = () => (
  <Link href='/' className="w-full flex items-center justify-center gap-4 bg-gradient-to-r from-[#A4E1FF] to-[#73B4FC] p-4 rounded-tl-2xl rounded-tr-3xl rounded-br-3xl shadow-lg  cursor-pointer">
    <div className="w-6 h-6 bg-white flex items-center justify-center text-[#73B4FC] rounded-full">
      1
    </div>
    <p>Your profile</p>
  </Link>
)


type FormData = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phoneNumber: string,
  confirmPassword: string
  country: string
};


export default function Page() {
  const router = useRouter()
  const submitBtnRef = useRef<HTMLButtonElement>(null)
  const {dispatch, firstName, lastName, phoneNumber, email, password, country} = useRegisterContexxt()
  const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormData>({
    defaultValues: {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      country
    }
  });
  const onSubmit = (data: FormData) => {
    const {firstName, lastName, email, password, phoneNumber, country} = data
    dispatch({
      type: 'update_first_name',
      payload: firstName
    })
    dispatch({
      type: 'update_last_name',
      payload: lastName
    })
    dispatch({
      type: 'update_email',
      payload: email
    })
    dispatch({
      type: 'update_password',
      payload: password
    })
    dispatch({
      type: 'update_phone_number',
      payload: phoneNumber
    })
    dispatch({
      type: 'update_country',
      payload: country
    })
    router.push('/business-info')
  }

  return (
    <>
      <main className="flex min-h-[80vh] flex-col items-center bg-white  rounded-2xl shadow-2xl">
        <div className='flex w-full items-center rounded-t-2xl bg-[#EEEFFD]'>
          <NavPill />
          <Link href={isValid ? `/business-info` : ''} className="w-full flex items-center  justify-center gap-4 bg-[#EEEFFD] p-4 cursor-pointer">
            <div className="w-6 h-6 bg-[#BEC8E8] flex items-center justify-center text-[#EEEFFD] rounded-full">
              2
            </div>
            <p className='text-[#BEC8E8]'>Business Information</p>
          </Link>
          <Link href={isValid ? `/summary` : ''} className="w-full flex items-center justify-center gap-4 rounded-tr-2xl bg-[#EEEFFD] p-4 cursor-pointer">
            <div className="w-6 h-6 bg-[#BEC8E8] flex items-center justify-center text-[#EEEFFD] rounded-full">
              3
            </div>
            <p className='text-[#BEC8E8]'>Confirmation page</p>
          </Link>
        </div>
        <div className='gap-2 mt-8 flex flex-col items-center'>
          <h3 className='text-center text-[#BEC8E8]'>Step 1</h3>
          <h1 className='text-center text-[#516992] text-2xl font-semibold'>Your profile</h1>
          <p className='text-center text-[#67728C] font-semibold'>Enter the login for your account. You will be able to create additional users after registering</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full grid mt-10 px-24 2xl:px-60 grid-cols-2 gap-6 items-center justify-between">
          <CustomInput
            registration={register("firstName", {required: 'This is a required field'})}
            placeholder="Input First name"
            error={errors.firstName}
            classNames="w-1/2"
            label="First Name"
            required
          />
          <CustomInput
            registration={register("lastName", {required: 'This is a required field'})}
            placeholder="Input last name"
            error={errors.lastName}
            classNames="w-1/2"
            label="Last Name"
            required
          />
          <CustomInput
            registration={register("email", {required: 'This is a required field'})}
            placeholder="Input Email"
            error={errors.email}
            classNames="w-1/2"
            label="Email"
            required
          />
          <CustomInput
            registration={register("phoneNumber", {required: 'This is a required field'})}
            placeholder="Input Phone number"
            error={errors.phoneNumber}
            classNames="w-1/2"
            label="Phone number"
            required
          />
          <CustomInput
            registration={register("password", {required: 'This is a required field'})}
            placeholder="Input Password"
            error={errors.password}
            classNames="w-1/2"
            label="Password"
            required
          />
          <CustomInput
            registration={register("country", {required: 'This is a required field'})}
            placeholder="Input Country"
            error={errors.country}
            classNames="w-1/2"
            label="Country"
            required
          />
          <button ref={submitBtnRef} type="submit" className='invisible' />
        </form>
      </main>
      <div className="flex w-full mt-8 items-center justify-between">
        <button className='text-[#73B4FC]'>Back to login</button>
        <button
          onClick={() => submitBtnRef?.current?.click()}
          className='bg-gradient-to-r from-[#A4E1FF] to-[#73B4FC] text-white rounded py-2 px-4'
        >
          Next step
        </button>
      </div>
    </>

  )
}
