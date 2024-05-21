"use client"
import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { useAppSelector } from '@/app/lib/Redux/hooks'

function Layout({ children }: { children: React.ReactNode }) {

    const sidebarState = useAppSelector((state) => state.SidebarVisibility.value)

    return (
        <React.Fragment>

            <div className={`grid ${sidebarState ? "md:grid-cols-[280px_calc(100%-280px)]" : "md:grid-cols-[80px_calc(100%-80px)]"} md:grid-flow-col`}>

                <Sidebar />

                <Header />

                {children}

            </div>

        </React.Fragment>
    )
}

export default Layout