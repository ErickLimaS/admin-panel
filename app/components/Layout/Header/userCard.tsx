'use client'
import React, { useState } from 'react'
import { signOut, useSession } from "next-auth/react"
import Image from 'next/image'
import CaretDownSvg from "@/public/assets/svg/caret-down-fill.svg"
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

function UserCard({ customClassStyle, onNavBar }: { customClassStyle: string, onNavBar?: boolean }) {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const { data: session } = useSession()

    return (
        <React.Fragment>
            <button
                className={customClassStyle}
                title={`${isMenuOpen ? "Close" : "Open"} User Settings`}
                onClick={() => setIsMenuOpen(!onNavBar ? !isMenuOpen : false)}
            >

                <Image
                    src={session?.user ? session.user.image! : "/assets/img/profile.jpg"}
                    width={onNavBar ? 56 : 36} height={onNavBar ? 56 : 36}
                    alt='username'
                    className='rounded-full'
                />

                <h5 className='line-clamp-1 font-semibold text-white max-w-32'>
                    {session?.user?.name}
                </h5>

                {(session?.user && !onNavBar) && (
                    <CaretDownSvg fill="white" />
                )}

            </button>

            <AnimatePresence>

                {isMenuOpen && (
                    <motion.nav
                        className='absolute top-[52px] right-0 bg-secondary w-full max-w-[14.3rem] rounded-sm'
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <ul
                            className='grid gap-2 text-white'
                        >
                            <li
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Link
                                    className='block p-2 hover:bg-white hover:text-secondary transition-all'
                                    href='/profile'
                                >
                                    Profile
                                </Link>
                            </li>
                            <li
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Link
                                    className='block p-2 hover:bg-white hover:text-secondary transition-all'
                                    href='/settings'
                                >
                                    Settings
                                </Link>
                            </li>
                            <li
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <button
                                    className='block p-2 w-full text-start hover:bg-white hover:text-red-700 transition-all'
                                    onClick={() => signOut()}
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>

        </React.Fragment>
    )
}

export default UserCard