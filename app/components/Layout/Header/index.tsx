import Link from 'next/link'
import React from 'react'
import BellSvg from "@/public/assets/svg/bell.svg"
import AboutSvg from "@/public/assets/svg/question-circle.svg"
import EmailSvg from "@/public/assets/svg/envelope.svg"
import OpenSidebarButton from './openSidebarButton'
import UserCard from './userCard'

function Header() {
    return (
        <header className='col-main flex justify-between bg-secondary'>

            <div className='flex items-center gap-4'>

                <OpenSidebarButton />

                <Link
                    href={"/"}
                    className='block text-white'
                >
                    UNDER DEVELOPMENT
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

                <UserCard
                    customClassStyle='hidden md:flex items-center gap-2 bg-primary px-4 py-2'
                />

            </div>

        </header>
    )
}

export default Header