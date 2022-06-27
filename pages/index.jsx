import Meta from '../layouts/Meta'
import Image from 'next/image'
import Link from 'next/link'
import Input from '/components/Input'

const index = (props) => {
  return (
    <>
      <Meta {...props.meta} />
      <header className='w-full'>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="text-white text-6xl font-light">❮</a>
              <a href="#slide2" className="text-white text-6xl font-light">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="text-white text-6xl font-light">❮</a>
              <a href="#slide3" className="text-white text-6xl font-light">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="text-white text-6xl font-light">❮</a>
              <a href="#slide4" className="text-white text-6xl font-light">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="text-white text-6xl font-light">❮</a>
              <a href="#slide1" className="text-white text-6xl font-light">❯</a>
            </div>
          </div>
        </div>
      </header>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex justify-center flex-col items-center py-10 gap-y-10">
        {/* news */}
        <div className="w-11/12 flex flex-col">
          <div className="w-10/12 flex flex-row my-5 mx-auto">
            <div className="bg-color-primary text-color-primary">l</div>
            <div className="bg-[#F5F5F5] pl-2">
              <p className='text-4xl font-light'>ข่าวสาร</p>
            </div>
          </div>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item w-full relative flex items-center justify-between">
              <a href="#slide4" className="">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 22C18.253 22 22.9167 17.5228 22.9167 12C22.9167 6.47715 18.253 2 12.5 2C6.74703 2 2.08333 6.47715 2.08333 12C2.08333 17.5228 6.74703 22 12.5 22Z" stroke="#27272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12.5 8L8.33333 12L12.5 16" stroke="#27272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.6667 12H8.33333" stroke="#27272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              {/* card group */}
              <div className="w-10/12 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-y-5 gap-x-10">
                {news.map((news) => (
                  <div class="bg-base-100">
                    <figure><img src={news.img} alt="Shoes" /></figure>
                    <div class="w-full">
                      <h2 class="text-xl">
                        {news.title}
                      </h2>
                      <p className="font-light text-sm">{news.decript}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#slide2" className="">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="25" height="24" fill="white" />
                  <path d="M12.5 22C18.253 22 22.9167 17.5228 22.9167 12C22.9167 6.47715 18.253 2 12.5 2C6.74707 2 2.08337 6.47715 2.08337 12C2.08337 17.5228 6.74707 22 12.5 22Z" stroke="#27272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12.5 16L16.6667 12L12.5 8" stroke="#27272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.33337 12H16.6667" stroke="#27272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* itern */}
        <div className="w-11/12 flex flex-col">
          <div className="w-10/12 flex flex-row justify-between my-5 mx-auto">
            <div className="flex flex-row">
              <div className="bg-color-primary text-color-primary">l</div>
              <div className="bg-[#F5F5F5] pl-2">
                <p className='text-4xl font-light'>รับ intern</p>
              </div>
            </div>
            <div className="border-b flex items-center">
              <input type="text" class="border-none bg-color-bg pl-0 focus:ring-0" placeholder='ค้นหา' />
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#B3B7BD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20 19.9998L14.9249 14.9248" stroke="#B3B7BD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item w-full relative flex items-center justify-between">
              <a href="#slide4" className="">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 22C18.253 22 22.9167 17.5228 22.9167 12C22.9167 6.47715 18.253 2 12.5 2C6.74703 2 2.08333 6.47715 2.08333 12C2.08333 17.5228 6.74703 22 12.5 22Z" stroke="#27272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12.5 8L8.33333 12L12.5 16" stroke="#27272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.6667 12H8.33333" stroke="#27272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              {/* card group */}
              <div className="w-10/12 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-10">
                {intern.map((intern) => (
                  <div class="bg-white border rounded-md p-3">
                    <div className="flex items-center gap-x-2 w-full">
                      <img className='w-10 h-10 rounded-full' src={intern.img} alt="Shoes" />
                      <p>{intern.name}</p>
                    </div>
                    <div class="w-11/12 flex flex-col gap-y-5 my-5">
                      <p>{intern.title}</p>
                      <p>Contact : {intern.contact}</p>
                      <p>{intern.location}</p>
                    </div>
                    <div class="flex w-full gap-x-1 font-light">
                      <div class="border px-2 rounded-full">Fashion</div>
                      <div class="border px-2 rounded-full">Products</div>
                      <div class="border px-2 rounded-full">Products</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#slide2" className="">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="25" height="24" fill="white" />
                  <path d="M12.5 22C18.253 22 22.9167 17.5228 22.9167 12C22.9167 6.47715 18.253 2 12.5 2C6.74707 2 2.08337 6.47715 2.08337 12C2.08337 17.5228 6.74707 22 12.5 22Z" stroke="#27272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12.5 16L16.6667 12L12.5 8" stroke="#27272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.33337 12H16.6667" stroke="#27272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </a>
            </div>
          </div>
        </div>
        {/* สหกิจ */}
        <div className="w-11/12 flex flex-col">
          <div className="w-10/12 flex flex-row justify-between my-5 mx-auto">
            <div className="flex flex-row">
              <div className="bg-color-primary text-color-primary">l</div>
              <div className="bg-[#F5F5F5] pl-2">
                <p className='text-4xl font-light'>รับ intern</p>
              </div>
            </div>
            <button className='bg-color-primary flex items-center rounded-lg px-2 gap-x-1 text-white font-light text-sm'>
              <span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 21V14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4 10V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 21V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 8V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M20 21V16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M20 12V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1 14H7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M17 16H23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              ค้นหาแบบกรอง
            </button>
          </div>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item w-full relative flex items-center justify-between">
              <a href="#slide4" className="">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 22C18.253 22 22.9167 17.5228 22.9167 12C22.9167 6.47715 18.253 2 12.5 2C6.74703 2 2.08333 6.47715 2.08333 12C2.08333 17.5228 6.74703 22 12.5 22Z" stroke="#27272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12.5 8L8.33333 12L12.5 16" stroke="#27272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.6667 12H8.33333" stroke="#27272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              {/* card group */}
              <div className="w-10/12 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-10">
                {intern.map((intern) => (
                  <div class="bg-white border rounded-md p-3">
                    <div className="flex items-center gap-x-2 w-full">
                      <img className='w-10 h-10 rounded-full' src={intern.img} alt="Shoes" />
                      <p>{intern.name}</p>
                    </div>
                    <div class="w-11/12 flex flex-col gap-y-5 my-5">
                      <p>{intern.title}</p>
                      <p>Contact : {intern.contact}</p>
                      <p>{intern.location}</p>
                    </div>
                    <div class="flex w-full gap-x-1 font-light">
                      <div class="border px-2 rounded-full">Fashion</div>
                      <div class="border px-2 rounded-full">Products</div>
                      <div class="border px-2 rounded-full">Products</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#slide2" className="">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="25" height="24" fill="white" />
                  <path d="M12.5 22C18.253 22 22.9167 17.5228 22.9167 12C22.9167 6.47715 18.253 2 12.5 2C6.74707 2 2.08337 6.47715 2.08337 12C2.08337 17.5228 6.74707 22 12.5 22Z" stroke="#27272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12.5 16L16.6667 12L12.5 8" stroke="#27272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.33337 12H16.6667" stroke="#27272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const news = [
  {
    img: "https://api.lorem.space/image/shoes?w=400&h=225",
    title: "At vero eos et accusamus et iusto odio dignissimos.",
    decript: "ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
  },
  {
    img: "https://api.lorem.space/image/shoes?w=400&h=225",
    title: "At vero eos et accusamus et iusto odio dignissimos.",
    decript: "ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
  },
  {
    img: "https://api.lorem.space/image/shoes?w=400&h=225",
    title: "At vero eos et accusamus et iusto odio dignissimos.",
    decript: "ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
  },
  {
    img: "https://api.lorem.space/image/shoes?w=400&h=225",
    title: "At vero eos et accusamus et iusto odio dignissimos.",
    decript: "ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
  },
  {
    img: "https://api.lorem.space/image/shoes?w=400&h=225",
    title: "At vero eos et accusamus et iusto odio dignissimos.",
    decript: "ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
  },
  {
    img: "https://api.lorem.space/image/shoes?w=400&h=225",
    title: "At vero eos et accusamus et iusto odio dignissimos.",
    decript: "ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
  },
]

const intern = [
  {
    img: "https://api.lorem.space/image/shoes?w=400&h=225",
    name: "Voluptas assumenda officia",
    title: "Graphic Design Intern",
    contact: "$700 - $900 PER MONTH",
    location: "Pathumwan",
  },
  {
    img: "https://api.lorem.space/image/shoes?w=400&h=225",
    name: "Voluptas assumenda officia",
    title: "Graphic Design Intern",
    contact: "$700 - $900 PER MONTH",
    location: "Pathumwan",
  },
  {
    img: "https://api.lorem.space/image/shoes?w=400&h=225",
    name: "Voluptas assumenda officia",
    title: "Graphic Design Intern",
    contact: "$700 - $900 PER MONTH",
    location: "Pathumwan",
  },
  {
    img: "https://api.lorem.space/image/shoes?w=400&h=225",
    name: "Voluptas assumenda officia",
    title: "Graphic Design Intern",
    contact: "$700 - $900 PER MONTH",
    location: "Pathumwan",
  },
  {
    img: "https://api.lorem.space/image/shoes?w=400&h=225",
    name: "Voluptas assumenda officia",
    title: "Graphic Design Intern",
    contact: "$700 - $900 PER MONTH",
    location: "Pathumwan",
  },
  {
    img: "https://api.lorem.space/image/shoes?w=400&h=225",
    name: "Voluptas assumenda officia",
    title: "Graphic Design Intern",
    contact: "$700 - $900 PER MONTH",
    location: "Pathumwan",
  },
]

const meta = {
  title: "หน้าแรก",
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

export default index