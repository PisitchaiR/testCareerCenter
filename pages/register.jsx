import Meta from '../layouts/Meta'
import Image from 'next/image'
import Link from 'next/link'
import Input from '/components/Input'

const register = (props) => {
    return (
        <>
            <Meta {...props.meta} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex justify-center">
                <section className='w-full md:w-10/12 lg:w-9/12 border rounded-lg md:mt-20 mb-32 mt-10 h-full bg-color-primary pl-0 lg:pl-3'>
                    <div className="flex flex-col-reverse lg:flex-row h-full justify-center bg-white rounded-md lg:rounded-r-md lg:rounded-l-none">
                        <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-center justify-center px-5 py-5 pl-2 border-t lg:border-none">
                            <p className=' text-[#7C7C7C]'>เลือกประเภทสมาชิกตามการใช้งานของคุณ</p>
                            <div className="my-16">
                                <Image height={160} width={160} src={`https://www.it.kmitl.ac.th/wp-content/uploads/2017/12/it-logo.png`} alt='' />
                            </div>
                            <p className='text-[#7C7C7C] text-sm'>นักศึกษาสามารถตรวจสอบการเข้าร่วมของ</p>
                            <p className='text-[#7C7C7C] text-sm'>มหาวิทยาลัยที่ตนเองสังกัดได้ที่นี่ <span className='text-[#F26721]'><Link href="/">รายชื่อมหาวิทยาลัย</Link></span></p>
                        </div>
                        <div className="w-full lg:w-7/12 flex flex-col items-center lg:border-l px-8 py-5 lg:py-10 gap-y-7">
                            <div className="text-4xl mb-5">สมัครสมาชิก</div>
                            <div className="grid grid-rows-3 gap-y-5 items-start">
                                <div className="border rounded-md flex py-1 px-4 items-center gap-x-5 w-full hover:bg-gray-100 cursor-pointer">
                                    <svg className='w-2/12' width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.2366 2.51722C25.2881 1.75329 26.7119 1.75329 27.7634 2.51722L47.7885 17.0664C48.84 17.8303 49.28 19.1844 48.8784 20.4205L41.2294 43.9615C40.8278 45.1976 39.6759 46.0344 38.3762 46.0344H13.6238C12.3241 46.0344 11.1722 45.1976 10.7706 43.9615L3.12164 20.4205C2.72002 19.1844 3.16 17.8303 4.21146 17.0664L24.2366 2.51722Z" fill="white" stroke="#2B68E8" strokeWidth="2" />
                                        <path d="M34 35V33C34 31.9391 33.5786 30.9217 32.8284 30.1716C32.0783 29.4214 31.0609 29 30 29H22C20.9391 29 19.9217 29.4214 19.1716 30.1716C18.4214 30.9217 18 31.9391 18 33V35" stroke="#2B68E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M26 25C28.2091 25 30 23.2091 30 21C30 18.7909 28.2091 17 26 17C23.7909 17 22 18.7909 22 21C22 23.2091 23.7909 25 26 25Z" stroke="#2B68E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="text-sm w-10/12">
                                        <p>นักศึกษา</p>
                                        <p className='text-sm'>สามาถสมัครสมาชิกได้โดยใช้อีเมลของสถาบัน หรือคณะที่ตนสังสัด สามารถเช็คอีเมลที่สามารถใช้งานได้ที่</p>
                                        <p className="text-color-primary">รายชื่ออีเมล</p>
                                    </div>
                                </div>
                                <div className="border rounded-md flex py-1 px-4 items-center gap-x-5 w-full h-full hover:bg-gray-100 cursor-pointer">
                                    <svg className='w-2/12' width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.2366 2.51722C25.2881 1.75329 26.7119 1.75329 27.7634 2.51722L47.7885 17.0664C48.84 17.8303 49.28 19.1844 48.8784 20.4205L41.2294 43.9615C40.8278 45.1976 39.6759 46.0344 38.3762 46.0344H13.6238C12.3241 46.0344 11.1722 45.1976 10.7706 43.9615L3.12164 20.4205C2.72002 19.1844 3.16 17.8303 4.21146 17.0664L24.2366 2.51722Z" fill="white" stroke="#2B68E8" strokeWidth="2" />
                                        <path d="M34 21H18C16.8954 21 16 21.8954 16 23V33C16 34.1046 16.8954 35 18 35H34C35.1046 35 36 34.1046 36 33V23C36 21.8954 35.1046 21 34 21Z" stroke="#2B68E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M30 35V19C30 18.4696 29.7893 17.9609 29.4142 17.5858C29.0391 17.2107 28.5304 17 28 17H24C23.4696 17 22.9609 17.2107 22.5858 17.5858C22.2107 17.9609 22 18.4696 22 19V35" stroke="#2B68E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <div className="text-sm w-10/12">
                                        <p>นักศึกษา</p>
                                        <p>ยังไม่เปิดให้สมัครสมาชิก</p>
                                    </div>
                                </div>
                                <div className="border rounded-md flex py-1 px-4 items-center gap-x-5 w-full h-full hover:bg-gray-100 cursor-pointer">
                                    <svg className='w-2/12' width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.2366 2.51722C25.2881 1.75329 26.7119 1.75329 27.7634 2.51722L47.7885 17.0664C48.84 17.8303 49.28 19.1844 48.8784 20.4205L41.2294 43.9615C40.8278 45.1976 39.6759 46.0344 38.3762 46.0344H13.6238C12.3241 46.0344 11.1722 45.1976 10.7706 43.9615L3.12164 20.4205C2.72002 19.1844 3.16 17.8303 4.21146 17.0664L24.2366 2.51722Z" fill="white" stroke="#2B68E8" strokeWidth="2" />
                                        <path d="M34 21H18C16.8954 21 16 21.8954 16 23V33C16 34.1046 16.8954 35 18 35H34C35.1046 35 36 34.1046 36 33V23C36 21.8954 35.1046 21 34 21Z" stroke="#2B68E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M30 35V19C30 18.4696 29.7893 17.9609 29.4142 17.5858C29.0391 17.2107 28.5304 17 28 17H24C23.4696 17 22.9609 17.2107 22.5858 17.5858C22.2107 17.9609 22 18.4696 22 19V35" stroke="#2B68E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <div className="text-sm w-10/12">
                                        <p>นักศึกษา</p>
                                        <p>ยังไม่เปิดให้สมัครสมาชิก</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

const meta = {
    title: "สมัครสมาชิค",
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

export default register