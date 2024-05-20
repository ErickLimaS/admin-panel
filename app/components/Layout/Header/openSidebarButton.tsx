"use client"
import React from 'react'
import MenuSvg from "@/public/assets/svg/list.svg"
import { invertStateValue } from '@/app/lib/Redux/Features/toggleSidebar'
import { useAppDispatch, useAppSelector } from '@/app/lib/Redux/hooks'

function OpenSidebarButton() {

    const sidebarState = useAppSelector((state) => state.SidebarVisibility.value)
    const dispatch = useAppDispatch()

    return (
        <button
            title="Menu"
            className={`max-md:py-5 px-6 ${sidebarState ? "bg-secondary" : "bg-primary"} h-full transition-colors`}
            onClick={() => dispatch(invertStateValue())}
        >
            <MenuSvg fill={sidebarState ? "var(--primary)" : "white"} className="scale-150 transition-colors" />
        </button>
    )
}

export default OpenSidebarButton