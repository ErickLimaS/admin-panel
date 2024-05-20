"use client"
import { useAppSelector } from '@/app/lib/Redux/hooks'
import React from 'react'

function Sidebar() {

    const sidebarState = useAppSelector((state) => state.SidebarVisibility.value)

    return (
        <nav className={`${sidebarState ? "max-md:flex max-md:absolute max-md:top-[56px] max-md:left-0 max-md:bottom-0" : "max-md:hidden"} flex row-span-5 col-span-1 bg-secondary`}>
            Sidebar
        </nav>
    )
}

export default Sidebar