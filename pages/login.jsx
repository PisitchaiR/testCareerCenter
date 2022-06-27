import Meta from '../layouts/Meta'
import Image from 'next/image'
import Link from 'next/link'
import Input from '/components/Input'
import { useForm, Controller } from "react-hook-form";

const login = (props) => {
    const { register, handleSubmit, formState: { errors }, control, } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <Meta {...props.meta} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex justify-center">
                <section className='w-full md:w-10/12 lg:w-9/12 h-full border rounded-lg md:mt-20 mb-32 mt-20'>
                    <div className="flex flex-col-reverse lg:flex-row bg-white rounded-lg">
                        <div className="w-full border-t lg:border-none lg:w-6/12 flex flex-col items-center justify-center py-10 px-5">
                            <Image height={175} width={175} src={`https://www.it.kmitl.ac.th/wp-content/uploads/2017/12/it-logo.png`} alt='' />
                            <p className='text-[#7C7C7C] font-light text-sm'>ระบบสนับสนุนการหางาน และสหกิจศึกษา</p>
                            <p className='text-[#7C7C7C] font-light text-sm'>คณะเทคโนโลยีสารสนเทศ</p>
                            <p className='text-[#7C7C7C] font-light text-sm'>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</p>
                        </div>
                        <div className="w-full lg:w-6/12 flex flex-col items-center lg:border-l px-8 py-10 gap-y-7">
                            <div className="text-4xl mb-5">เข้าสู่ระบบ</div>
                            <form onSubmit={handleSubmit(onSubmit)} className="group flex flex-col items-center gap-y-4 w-full">
                                <div className="w-full">
                                    <Controller
                                        name="email"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) => <Input type="email" palce="Email" {...register("email", {
                                            required: "โปรดตรวจสอบ อีเมล ของคุณอีกครั้ง"
                                        })} />}
                                    />
                                    {errors.email && (
                                        <div className="text-sm text-red-500 font-light w-full">
                                            *{errors.email.message}
                                        </div>
                                    )}
                                </div>
                                <div className="w-full">
                                    <Controller
                                        name="password"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) => <Input type="password" palce="Password" {...register("password",{
                                            required: "โปรดตรวจสอบ รหัสผ่าน ของคุณอีกครั้ง"
                                        })} />}
                                    />
                                    {errors.password && (
                                        <div className="text-sm text-red-500 font-light w-full">
                                            *{errors.password.message}
                                        </div>
                                    )}
                                </div>
                                <button type='submit' className='rounded-full bg-color-primary text-white px-10 py-1.5 font-light text-xl hover:bg-opacity-70'>Login</button>
                            </form>
                            <div className="flex justify-between w-full pt-2">
                                <Link href='/'><a className=' text-sm font-light hover:text-opacity-50'>ลืมรหัสผ่าน?</a></Link>
                                {/* <Link href='/register'><a className='text-color-primary text-sm font-light'>สมัครสมาชิก</a></Link> */}
                                <p className='text-[#77777777] text-sm font-light'>สมัครสมาชิก</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex-grow border-t border-gray-400"></div>
                                <span className="flex-shrink mx-4 text-[#7C7C7C] text-sm">Social Login</span>
                                <div className="flex-grow border-t border-gray-400"></div>
                            </div>
                            <div className="flex justify-center gap-x-5 w-full">
                                <button disabled className='border border-[#7C7C7C] px-7 py-1.5 rounded-lg bg-color-bg'>
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_109_982)">
                                            <path d="M28.7173 14.834C28.7173 13.8484 28.6374 12.8574 28.4669 11.8877H14.79V17.4714H22.6221C22.2971 19.2722 21.2528 20.8653 19.7237 21.8776V25.5006H24.3963C27.1402 22.9751 28.7173 19.2456 28.7173 14.834Z" fill="#4285F4" />
                                            <path d="M14.7901 29.001C18.7008 29.001 21.9988 27.717 24.4017 25.5006L19.7291 21.8776C18.4291 22.762 16.7508 23.2628 14.7954 23.2628C11.0126 23.2628 7.80515 20.7107 6.65431 17.2795H1.83252V21.0144C4.29403 25.9108 9.30763 29.001 14.7901 29.001V29.001Z" fill="#34A853" />
                                            <path d="M6.64894 17.2795C6.04155 15.4787 6.04155 13.5287 6.64894 11.7278V7.99292H1.83248C-0.224108 12.0901 -0.224108 16.9172 1.83248 21.0144L6.64894 17.2795V17.2795Z" fill="#FBBC04" />
                                            <path d="M14.7901 5.73917C16.8573 5.70721 18.8553 6.48509 20.3525 7.91297L24.4923 3.77316C21.8709 1.31165 18.3918 -0.0416464 14.7901 0.000977138C9.30763 0.000977138 4.29403 3.09118 1.83252 7.99289L6.64898 11.7278C7.79449 8.29126 11.0072 5.73917 14.7901 5.73917V5.73917Z" fill="#EA4335" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_109_982">
                                                <path d="M0 5C0 2.23858 2.23858 0 5 0H24C26.7614 0 29 2.23858 29 5V24C29 26.7614 26.7614 29 24 29H5C2.23858 29 0 26.7614 0 24V5Z" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </button>
                                <button disabled className="border border-[#7C7C7C] px-7 py-1.5 rounded-lg bg-color-bg">
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29 14.5C29 6.49187 22.5081 0 14.5 0C6.49187 0 0 6.49187 0 14.5C0 21.7373 5.30241 27.7361 12.2344 28.8238V18.6914H8.55273V14.5H12.2344V11.3055C12.2344 7.67141 14.3992 5.66406 17.7112 5.66406C19.2972 5.66406 20.957 5.94727 20.957 5.94727V9.51563H19.1287C17.3275 9.51563 16.7656 10.6334 16.7656 11.7813V14.5H20.7871L20.1442 18.6914H16.7656V28.8238C23.6976 27.7361 29 21.7373 29 14.5Z" fill="#1877F2" />
                                        <path d="M20.1442 18.6914L20.7871 14.5H16.7656V11.7813C16.7656 10.6346 17.3275 9.51563 19.1287 9.51563H20.957V5.94727C20.957 5.94727 19.2977 5.66406 17.7112 5.66406C14.3992 5.66406 12.2344 7.67141 12.2344 11.3055V14.5H8.55273V18.6914H12.2344V28.8238C13.7357 29.0587 15.2643 29.0587 16.7656 28.8238V18.6914H20.1442Z" fill="white" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

const meta = {
    title: "เข้าสู่ระบบ",
    description: "",
    keywords: "",
}
export const getStaticProps = async (context) => {
    return {
        props: {
            meta,
        },
    }
}

export default login