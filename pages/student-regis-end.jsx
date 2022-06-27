import Meta from '../layouts/Meta'
import Image from 'next/image'
import Link from 'next/link'
import Input from '/components/Input'
import React, { useState } from 'react'
import Router from 'next/router'

const StudentRegisEnd = (props) => {
    const [state, setState] = useState({
        step: 1,
        uEmail: "",
        email: "",
        password: "",
        conPassword: "",
        uName: "",
        faculty: "",
        branch: "",
        sect: "",
    })

    const { email, password, conPassword, uName, faculty, branch, sect, } = state

    const handleChange = input => event => {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const [step, setStep] = useState(1)
    const maxGuests = 2
    const minGuests = 1

    const previousStep = () => {
        if (step > minGuests) setStep(step - 1)
    }

    const nextStep = () => {
        if (step < maxGuests) setStep(step + 1)
        else if (step > maxGuests) setStep(maxGuests)
    }

    const submit = () => {
        Router.push("/");
    }

    return (
        <>
            <Meta {...props.meta} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex justify-center">

                <section className='w-full md:w-7/12 lg:w-5/12 mb-32 lg:mb-16 mt-5 flex flex-col items-center '>
                    <Image className='' src="/it-kmitl-thai-black.svg" layout='fixed' width={230} height={70} alt="" />
                    <div className="border rounded-xl w-full mt-5 bg-white">
                        <div className="w-full h-5 bg-color-primary text-color-primary rounded-t-xl"></div>
                        <div className="flex flex-col items-center py-5 rounded-b-lg pt-3">
                            <p className='text-2xl mb-5'>สมัครสมาชิก</p>
                            {(() => {
                                switch (step) {
                                    case 1:
                                        return (
                                            <div className="w-9/12 flex flex-col lg:rounded-xl justify-center items-center gap-y-3 mb-10 h-80">
                                                <div className="flex flex-col w-full">
                                                    <label htmlFor="email" className='w-full mb-2'>อีเมลส่วนตัว</label>
                                                    <input type="text" className='p-1 border-[#C4C4C4] rounded-md bg-[#F5F5F5]' onChange={handleChange(this)} value={email} name="email" />
                                                </div>
                                                <div className="flex flex-col w-full">
                                                    <label htmlFor="password" className='w-full mb-2'>รหัสผ่าน</label>
                                                    <input type="text" className='p-1 border-[#C4C4C4] rounded-md bg-[#F5F5F5]' onChange={handleChange(this)} value={password} name="password" />
                                                </div>
                                                <div className="flex flex-col w-full">
                                                    <label htmlFor="conPassword" className='w-full mb-2'>ยืนยันรหัสผ่าน</label>
                                                    <input type="text" className='p-1 border-[#C4C4C4] rounded-md bg-[#F5F5F5]' onChange={handleChange(this)} value={conPassword} name="conPassword" />
                                                </div>
                                            </div>
                                        );
                                    case 2:
                                        return (
                                            <div className="w-9/12 flex flex-col lg:rounded-xl justify-center items-center gap-y-7 mb-10 h-80">
                                                <div className="flex w-full items-center">
                                                    <label htmlFor="email" className='w-5/12'>ชื่อมหาวิทยาลัย  </label>
                                                    <select className='py-1 px-2 border-[#C4C4C4] rounded-md w-7/12' onChange={handleChange(this)} value={uName} name="uName">
                                                        <option selected disabled value="">---คณะ---</option>
                                                        <option value="engineer">วิศวกรรมศาสตร์</option>
                                                        <option value="science">วิทยาศาสตร์</option>
                                                        <option value="it">วิทยาศาสตร์</option>
                                                    </select>
                                                </div>
                                                <div className="flex w-full items-center">
                                                    <label htmlFor="email" className='w-5/12'>คณะ</label>
                                                    <select className='py-1 px-2 border-[#C4C4C4] rounded-md w-7/12' name="faculty" onChange={handleChange(this)} value={faculty}>
                                                        <option selected disabled value="">---คณะ---</option>
                                                        <option value="engineer">วิศวกรรมศาสตร์</option>
                                                        <option value="science">วิทยาศาสตร์</option>
                                                        <option value="it">วิทยาศาสตร์</option>
                                                    </select>
                                                </div>
                                                <div className="flex w-full items-center">
                                                    <label htmlFor="email" className='w-5/12'>สาขา</label>
                                                    <select className='py-1 px-2 border-[#C4C4C4] rounded-md w-7/12' name="branch" onChange={handleChange(this)} value={branch}>
                                                        <option selected disabled value="">---คณะ---</option>
                                                        <option value="">วิศวกรรมศาสตร์</option>
                                                        <option value="">วิทยาศาสตร์</option>
                                                    </select>
                                                </div>
                                                <div className="flex w-full items-center">
                                                    <label htmlFor="email" className='w-5/12'>แขนง</label>
                                                    <select className='py-1 px-2 border-[#C4C4C4] rounded-md w-7/12' name="sect" onChange={handleChange(this)} value={sect}>
                                                        <option selected disabled value="">---คณะ---</option>
                                                        <option value="">วิศวกรรมศาสตร์</option>
                                                        <option value="">วิทยาศาสตร์</option>
                                                        <option value="">ไม่มี</option>
                                                    </select>
                                                </div>
                                            </div>
                                        );
                                    default:
                                        return null;
                                }
                            })()}
                            {/* menu step */}
                            <div className={"flex w-9/12 items-center" + (step == 1 ? " justify-center" : " justify-between")}>
                                <button className={step == 1 ? "hidden" : "text-[#7C7C7C] font-light"} onClick={previousStep}>	&lt; ย้อนกลับ</button>
                                <button className={'flex items-center gap-x-2 rounded-full justify-center bg-color-primary text-white w-4/12 py-1.5 font-light hover:bg-opacity-70 ' + (step == 2 ? "rounded-md" : "rounded-full")} onClick={step == 2 ? submit : nextStep}>
                                    <div>{step == 2 ? "ลงทะเบียน" : "ถัดไป"}</div>
                                    <svg className={step == 2 ? "hidden" : "inline-block"} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex justify-center w-9/12 gap-x-1 mt-10 mb-5">
                                <div className={"h-2 rounded-full bg-[#7C7C7C] duration-200 " + (step == 1 ? "w-5 bg-opacity-50" : "w-2")}></div>
                                <div className={"h-2 rounded-full bg-[#7C7C7C] duration-200 " + (step == 2 ? "w-5 bg-opacity-50" : "w-2")}></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

// const

const meta = {
    title: "ติดต่อเรา",
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

export default StudentRegisEnd