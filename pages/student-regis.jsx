import Meta from '../layouts/Meta'
import Image from 'next/image'
import Link from 'next/link'
import Input from '/components/Input'

const studentRegis = (props) => {
    return (
        <>
            <Meta {...props.meta} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex justify-center">
                <section className='w-full md:w-10/12 lg:w-9/12 rounded-xl md:mt-20 mb-24 mt-10 h-full bg-none lg:bg-color-primary pl-0 lg:pl-3 border'>
                    <div className="flex flex-col lg:flex-row h-full justify-center lg:rounded-xl">
                        <div className="bg-white w-full lg:w-6/12 flex flex-col items-start justify-between lg:border-b-0 lg:border-r px-5 py-10 border-b rounded-t-xl lg:rounded-none">
                            <div className="w-full">
                                <p className='text-4xl'>สมัครสมาชิก</p>
                                <div className="flex flex-col w-11/12 mt-12">
                                    <label htmlFor="email" className=' font-light'>อีเมลล์ : ของสังกัด(อีเมลล์มหาลัย)</label>
                                    <div className="flex border-2 border-color-primary  rounded-md w-full justify-between mt-2">
                                        <input type="text" className='border-none rounded-l-md focus:rounded-l-md w-8/12 p-1.5 bg-[#99B6F4] bg-opacity-20 focus:bg-white duration-1000 text-sm' />
                                        <button className='bg-color-primary text-white px-4 w-4/12 rounded-l-sm font-light'>ส่งอีเมล</button>
                                    </div>
                                </div>
                            </div>
                            <div className="font-light w-11/12 lg:mt-28 mt-20">
                                <p>คำอธิบาย</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non auctor faucibus malesuada arcu gravida tellus velit. Velit sed proin enim tortor ac, blandit.</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 bg-white flex flex-col items-center justify-between px-3 md:px-8 lg:px-10 py-10 gap-y-5 lg:gap-y-10 lg:rounded-r-md rounded-b-xl lg:rounded-none">
                            <p className='text-4xl'>นักศึกษา</p>
                            <svg width="200" height="200" viewBox="0 0 249 249" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M122.149 1.70821C123.551 0.689633 125.449 0.689628 126.851 1.7082L240.555 84.3192C241.957 85.3378 242.544 87.1432 242.008 88.7913L198.577 222.459C198.042 224.107 196.506 225.223 194.773 225.223H54.2269C52.494 225.223 50.9582 224.107 50.4227 222.459L6.99152 88.7913C6.45602 87.1432 7.04265 85.3378 8.4446 84.3192L122.149 1.70821Z" fill="#99B6F4" />
                                <path d="M122.149 20.7082C123.551 19.6896 125.449 19.6896 126.851 20.7082L222.485 90.1905C223.887 91.2091 224.474 93.0146 223.938 94.6626L187.409 207.087C186.874 208.735 185.338 209.851 183.605 209.851H65.3948C63.6619 209.851 62.1261 208.735 61.5906 207.087L25.0616 94.6626C24.5261 93.0146 25.1127 91.2091 26.5147 90.1905L122.149 20.7082Z" fill="#6B95EF" />
                                <path d="M122.149 36.7082C123.551 35.6896 125.449 35.6896 126.851 36.7082L207.268 95.1348C208.67 96.1534 209.257 97.9588 208.722 99.6069L178.005 194.143C177.469 195.791 175.934 196.907 174.201 196.907H74.7994C73.0665 196.907 71.5307 195.791 70.9952 194.143L40.2785 99.6069C39.743 97.9588 40.3296 96.1534 41.7316 95.1348L122.149 36.7082Z" fill="#2B68E8" />
                                <path d="M152.038 155.481V148.596C152.038 144.945 150.588 141.442 148.005 138.86C145.423 136.278 141.921 134.827 138.269 134.827H110.731C107.079 134.827 103.577 136.278 100.994 138.86C98.4121 141.442 96.9614 144.945 96.9614 148.596V155.481" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M124.5 121.058C132.104 121.058 138.269 114.893 138.269 107.288C138.269 99.6837 132.104 93.519 124.5 93.519C116.895 93.519 110.731 99.6837 110.731 107.288C110.731 114.893 116.895 121.058 124.5 121.058Z" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="flex flex-col items-center text-sm">
                                <p>นักศึกษาสามารถสมัครสมาชิกโดยกรอกข้อมูลอีเมลของคณะ</p>
                                <p>หรือสถาบันที่สังกัด</p>
                                <p>สามารถตรวจสอบอีเมลที่อนุญาติให้ใช้งานได้ที่</p>
                                <Link href="/"><a className='text-color-link hover:text-opacity-50'>คณะหรือสถาบันที่ใช้งานระบบนี้</a></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

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

export default studentRegis