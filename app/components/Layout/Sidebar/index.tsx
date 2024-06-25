"use client"
import { useAppSelector } from '@/app/lib/Redux/hooks'
import React from 'react'
import DashboardSvg from "@/public/assets/svg/dashboard.svg"
import UsersSvg from "@/public/assets/svg/people.svg"
import CodeBarSvg from "@/public/assets/svg/upc-scan.svg"
import BoxSvg from "@/public/assets/svg/box-seam.svg"
import ChartsSvg from "@/public/assets/svg/bar-chart.svg"
import SettingsSvg from "@/public/assets/svg/gear-wide.svg"
import NavItem from './navItem'
import UserCard from '../Header/userCard'

function Sidebar() {

    const sidebarState: boolean = useAppSelector((state) => state.SidebarVisibility.value)

    return (
        <nav className={`${sidebarState ? "max-md:flex-col max-md:absolute max-md:top-[56px] max-md:left-0 max-md:bottom-0 max-sm:w-[80%] max-md:w-[60%]" : "max-md:hidden"} flex flex-col row-span-5 col-span-1 bg-secondary`}>

            <div>

                <UserCard
                    customClassStyle={`${sidebarState ? "flex" : "hidden"} items-center gap-2 bg-[#214162] px-8 py-4 w-full`}
                    onNavBar
                />

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
                        customSvg={<UsersSvg fill={"#d322ff"} className={"scale-125"} />}
                        sidebarState={sidebarState}
                    />
                </li>
                <li>
                    <NavItem
                        title="Customers"
                        customSvg={<UsersSvg fill={"#ff5722"} className={"scale-125"} />}
                        sidebarState={sidebarState}
                    />
                </li>
                <li>
                    <NavItem
                        title="Products"
                        customSvg={<CodeBarSvg fill={"#018f83"} className={"scale-125"} />}
                        sidebarState={sidebarState}
                    />
                </li>
                <li>
                    <NavItem
                        title="Orders"
                        customSvg={<BoxSvg fill={"#03a9f4"} className={"scale-125"} />}
                        sidebarState={sidebarState}
                        hasCaret={[{
                            title: "Most Recents",
                            route: "/orders?sort=most_recents"
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