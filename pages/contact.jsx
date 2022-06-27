import Meta from "../layouts/Meta";
import Image from "next/image";
import Link from "next/link";
import Input from "/components/Input";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const contact = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const fields = { fields: data };
        console.log(fields)
    };

    const [note, setNote] = useState("");
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        async function fetchNotes() {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/contact/`
            );
            const json = await res.json();
            console.log(json);
            setNotes(json);
        }
        fetchNotes();
    }, []);

    return (
        <>
            <Meta {...props.meta} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex justify-center">
                <section className="w-full md:w-10/12 lg:w-9/12 border rounded-xl md:mt-20 mb-20 mt-20 h-full bg-none lg:bg-color-primary pl-0 lg:pl-3">
                    <div className="flex flex-col-reverse lg:flex-row h-full justify-center lg:rounded-xl">
                        <div className="bg-white w-full lg:w-5/12 flex flex-col items-start lg:border-r px-5 py-10 border-t rounded-b-xl lg:rounded-none">
                            <p className="text-4xl">ติดต่อเรา</p>
                            <div className="flex flex-col gap-y-10 mt-10">
                                <div className="font-light">
                                    <p>งานทะเบียนนักศึกษา (ระดับปริญญาตรี) : </p>
                                    <p>
                                        +66 (0) 2329 8000-99 ต่อ 2052 และ 2056 หรือ
                                        0801725376
                                    </p>
                                    <p>E-mail: undergrad@it.kmitl.ac.th</p>
                                </div>
                                <div className="font-light">
                                    <p>งานบัณฑิตศึกษา (ระดับปริญญาโทและเอก) :</p>
                                    <p>
                                        +66 (0) 2329 8000-99 ต่อ 2054 หรือ
                                        0869041119
                                    </p>
                                    <p>e-mail: graduate@it.kmitl.ac.th</p>
                                </div>
                                <div className="font-light">
                                    <p>งานกิจการนักศึกษา :</p>
                                    <p>+66 (0) 2329 8000-99 ต่อ 2054</p>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-7/12 bg-white flex flex-col items-center justify-center px-5 md:px-8 lg:px-16 py-10 gap-y-10 lg:rounded-r-md rounded-t-xl lg:rounded-none" >
                            <div className="w-full">
                                <input
                                    type="text"
                                    className={"px-2 py-1 placeholder-color-place bg-color-bg font-light border-none rounded-md w-full " + (errors.name && "ring-red-500 focus:ring-red-500")}
                                    placeholder="ชื่อ - นามสกุล"
                                    {...register('name', {
                                        required: "โปรดตรวจสอบ ชื่อ - นามสกุล ของคุณอีกครั้ง",
                                    })}
                                />
                                {errors.name && (
                                    <div className="text-sm text-red-500 font-light">
                                        *{errors.name.message}
                                    </div>
                                )}
                            </div>
                            <div className="w-full">
                                <input
                                    type="phone"
                                    className={"px-2 py-1 placeholder-color-place bg-color-bg font-light border-none rounded-md w-full " + (errors.name && "ring-red-500 focus:ring-red-500")}
                                    placeholder="เบอร์โทรศัพท์"
                                    {...register('phone', {
                                        required: "โปรดตรวจสอบ เบอร์โทรศัพท์ ของคุณอีกครั้ง",
                                        maxLength: 10,
                                    })}
                                />
                                {errors.phone?.type === 'maxLength' && (
                                    <div className="text-sm text-red-500 font-light">
                                        *คุณใส่เลข 10 หลัก
                                    </div>
                                )}
                                {errors.phone && (
                                    <div className="text-sm text-red-500 font-light">
                                        *{errors.phone.message}
                                    </div>
                                )}
                            </div>
                            <div className="w-full">
                                <input
                                    type="text"
                                    className={"px-2 py-1 placeholder-color-place bg-color-bg font-light border-none rounded-md w-full " + (errors.name && "ring-red-500 focus:ring-red-500")}
                                    placeholder="อีเมลล์"
                                    {...register('email', {
                                        required: "โปรดตรวจสอบ อีเมล ของคุณอีกครั้ง",
                                    })}
                                />
                                {errors.email && (
                                    <div className="text-sm text-red-500 font-light ">
                                        *{errors.email.message}
                                    </div>
                                )}
                            </div>
                            <div className="w-full">
                                <textarea
                                    className={"px-2 py-1 placeholder-color-place bg-color-bg font-light border-none rounded-md w-full " + (errors.name && "ring-red-500 focus:ring-red-500")}
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="5"
                                    placeholder="หัวข้อ"
                                    {...register('title', {
                                        required: "โปรดตรวจสอบ หัวข้อ ของคุณอีกครั้ง",
                                    })}
                                ></textarea>
                                {errors.title && (
                                    <div className="text-sm text-red-500 font-light ">
                                        *{errors.title.message}
                                    </div>
                                )}
                            </div>
                            <button className="rounded-md bg-color-primary text-white px-10 py-1.5 font-light text-xl hover:bg-opacity-70">
                                Submit
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}

const meta = {
    title: "ติดต่อเรา",
    description: "",
    keywords: "",
};

export const getStaticProps = async (context) => {
    return {
        props: {
            meta,
        },
    };
};

export default contact