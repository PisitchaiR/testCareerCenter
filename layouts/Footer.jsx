import { useRouter } from 'next/router'
import Link from 'next/link'

const SubFooter = () => {
    return (
        <footer className={"w-full bg-color-primary py-2 relative bottom-0"}>
            <p className="text-center text-white">Copyright &copy;IT KMITL 2022</p>
        </footer>
    )
}

const MainFooter = (props) => {
    return (
        <footer className={"w-full bg-[#27272A] py-10 "+props.display}>
            <div className="flex justify-between w-11/12 text-white mx-auto" >
                <div className="flex flex-col justify-between">
                    <Link href='/' className='mb-10'>
                        <a><img className=' w-6/12' src="/it-kmitl-thai-white.svg" alt="" /></a>
                    </Link>
                    <div className="group">
                        <p>บริหารงานโดย : คณะเทคโนโลยีสารสนเทศ</p>
                        <p>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p>ติดต่อเรา</p>
                    <p>เบอร์โทร: <span className='block'>000-000-0000</span></p>
                    <p>อีเมลล์: <span className='block'>support@application.name.com</span></p>
                </div>
            </div>
        </footer>
    )
}

const Footer = () => {
    const router = useRouter();
    return (
        <>
            <div className={"w-full bottom-0 "+(router.pathname === "/" || router.pathname === "/company" ? 'relative' : 'fixed')}>
                <MainFooter display={router.pathname === "/" || router.pathname === "/company" ? '' : 'hidden'}/>
                <SubFooter />
            </div>
        </>
    )

}

export default Footer