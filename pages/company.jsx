import Meta from '../layouts/Meta'
import Image from 'next/image'
import Link from 'next/link'


const company = (props) => {
  return (
    <>
      <Meta {...props.meta} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex justify-center">
        <section className='w-full rounded-lg lg:mt-16 md:mt-20 mb-32 mt-10'>
          <div className="flex flex-col items-start">
            <div className="w-full flex flex-row">
              <div className="bg-color-primary text-color-primary pl-1 lg:pl-2">l</div>
              <div className="bg-[#F5F5F5] pl-2">
                <p className='text-xl'>บริษัทที่เข้าร่วม</p>
                <p className='text-sm font-light'>รายชื่อบริษัทที่เข้าร่วมกับเรา</p>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3  gap-y-20 justify-items-center w-full md:w-11/12 lg:w-10/12 mx-auto mt-16">
              {logo.map((value, index) => (
                <div key={index} className="bg-[#F5F5F5] rounded-full p-5 flex justify-center items-center shadow-out">
                  <div className=" bg-[#F5F5F5] rounded-full flex justify-center items-center w-24 h-24 lg:w-36 md:w-36 lg:h-36 md:h-36 p-3 shadow-in hover:shadow-none hover:border-[#E2E2E2] hover:border">
                    <Image src={`/${value.name}.svg`} layout='fixed' width={260} height={50} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

const meta = {
  title: "บริษัทที่เข้าร่วม",
  description: "",
  keywords: "",
}

const logo = [
  {
    name: 'tinder'
  },
  {
    name: 'spotify'
  },
  {
    name: 'google'
  },
  {
    name: 'adobe'
  },
  {
    name: 'amazon'
  },
  {
    name: 'discord'
  },
  {
    name: 'youtube'
  },
  {
    name: 'netflix'
  },
]

export const getStaticProps = async (context) => {
  return {
    props: {
      meta,
      logo
    },
  }
}

export default company