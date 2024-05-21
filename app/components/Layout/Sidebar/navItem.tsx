"use client"
import React, { useState } from 'react'
import CaretDownSvg from "@/public/assets/svg/caret-down-fill.svg"
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

type NavItemType = { title: string, customSvg: React.ReactNode, sidebarState: boolean, hasCaret?: { title: string, route: string }[] }


function NavItem({ title, customSvg, sidebarState, hasCaret }: NavItemType) {

    const [listIsOpen, setListIsOpen] = useState<boolean>(false)

    return (
        <React.Fragment>
            <button
                className={`${sidebarState ? "flex pl-8 py-4 gap-4" : "flex flex-col text-sm text-center md:gap-2"} items-center gap-4 text-white w-full`}
                onClick={() => setListIsOpen(hasCaret ? !listIsOpen : false)}
            >

                {/* SHOWS SVG */}
                {customSvg}

                <span className='flex items-center gap-2 line-clamp-1'>

                    {title}

                    {(hasCaret && sidebarState) && (
                        <CaretDownSvg />
                    )}

                </span>

            </button>

            <AnimatePresence>

                {(hasCaret && listIsOpen) && (

                    <motion.ul
                        className='bg-[#214162]'
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                    >

                        {hasCaret.map((item) => (
                            <li
                                key={item.title}
                                className={`${sidebarState ? "py-4 pl-8" : "py-2 text-center"} text-sm`}
                            >
                                <Link href={item.route} className='text-white/75'>
                                    {item.title}
                                </Link>
                            </li>
                        ))}


                    </motion.ul>

                )}

            </AnimatePresence>

        </React.Fragment >
    )
}

export default NavItem