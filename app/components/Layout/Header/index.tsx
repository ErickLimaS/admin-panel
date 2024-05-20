import Link from 'next/link'
import React from 'react'
import BellSvg from "@/public/assets/svg/bell.svg"
import AboutSvg from "@/public/assets/svg/question-circle.svg"
import EmailSvg from "@/public/assets/svg/envelope.svg"
import Image from 'next/image'
import OpenSidebarButton from './openSidebarButton'

function Header() {
    return (
        <header className='col-main flex justify-between bg-secondary'>

            <div className='flex items-center gap-4'>

                <OpenSidebarButton />

                <Link
                    href={"/"}
                    className='block text-white'
                >
                    LOGO
                </Link>

            </div>

            <div className='flex items-center gap-6'>

                <div className='flex gap-4 max-md:mr-4'>

                    <button>
                        <BellSvg fill={"white"} className="scale-125" />
                    </button>

                    <button>
                        <AboutSvg fill={"white"} className="scale-125" />
                    </button>

                    <button>
                        <EmailSvg fill={"white"} className="scale-125" />
                    </button>

                </div>

                <button
                    className='hidden md:flex items-center gap-2 bg-primary px-4 py-2'
                    title='Open User Settings'
                >

                    <Image
                        src="/assets/img/profile.jpg"
                        width={36} height={36}
                        alt='username'
                        className='rounded-full'
                    />

                    <h5 className='line-clamp-1'>
                        username
                    </h5>

                </button>

            </div>

        </header>
    )
}

export default Header