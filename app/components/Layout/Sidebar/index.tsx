"use client"
import { useAppSelector } from '@/app/lib/Redux/hooks'
import Image from 'next/image'
import React from 'react'
import DashboardSvg from "@/public/assets/svg/dashboard.svg"
import UsersSvg from "@/public/assets/svg/people.svg"
import CommentsSvg from "@/public/assets/svg/chat-dots.svg"
import ChartsSvg from "@/public/assets/svg/bar-chart.svg"
import SettingsSvg from "@/public/assets/svg/gear-wide.svg"
import NavItem from './navItem'

function Sidebar() {

    const sidebarState: boolean = useAppSelector((state) => state.SidebarVisibility.value)

    return (
        <nav className={`${sidebarState ? "max-md:flex-col max-md:absolute max-md:top-[56px] max-md:left-0 max-md:bottom-0 max-sm:w-[80%] max-md:w-[60%]" : "max-md:hidden"} flex flex-col row-span-5 col-span-1 bg-secondary`}>

            <div>

                <button
                    className={`${sidebarState ? "flex" : "hidden"} items-center gap-2 bg-[#214162] px-8 py-4 w-full`}
                    title='Open User Settings'
                >

                    <Image
                        src="/assets/img/profile.jpg"
                        width={56} height={56}
                        alt='username'
                        className='rounded-full'
                    />

                    <h5 className='line-clamp-1'>
                        username
                    </h5>

                </button>

            </div>

            <h5 className={`${sidebarState ? "" : "hidden"} pl-8 py-4 text-white font-bold border-b-[1px] border-primary`}>
                General
            </h5>

            <ul className={`flex flex-col ${sidebarState ? "gap-2" : "md:gap-8"} my-4`}>

                <li>
                    <NavItem
                        title="Dashboard"
                        customSvg={<DashboardSvg fill={"#ff9800"} className={"scale-125"} />}
                        sidebarState={sidebarState}
                    />
                </li>
                <li>
                    <NavItem
                        title="Users"
                        customSvg={<UsersSvg fill={"#ff5722"} className={"scale-125"} />}
                        sidebarState={sidebarState}
                    />
                </li>
                <li>
                    <NavItem
                        title="Comments"
                        customSvg={<CommentsSvg fill={"#03a9f4"} className={"scale-125"} />}
                        sidebarState={sidebarState}
                        hasCaret={[{
                            title: "Most Recents",
                            route: "/comments"
                        }]}
                    />

                </li>
                <li>
                    <NavItem
                        title="Charts"
                        customSvg={<ChartsSvg fill={"#018f83"} className={"scale-125"} />}
                        sidebarState={sidebarState}
                    />

                </li>
                <li>
                    <NavItem
                        title="Settings"
                        customSvg={<SettingsSvg fill={"#9c27b0"} className={"scale-125"} />}
                        sidebarState={sidebarState}
                    />
                </li>

            </ul>

        </nav>
    )
}

export default Sidebar