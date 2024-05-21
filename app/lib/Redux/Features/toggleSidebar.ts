"use client"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: JSON.parse(localStorage.getItem("SidebarVisibility") as string) || false
}

// Change Sidebar Visibility
// on Mobile it toggles between hidden and flex
// on Desktop it goes from only icons to Full Description
export const toggleSidebar = createSlice({
    name: "SidebarVisibility",
    initialState,
    reducers: {
        showSidebar: (state) => {
            state.value = true
            localStorage.setItem("SidebarVisibility", "true")
        },
        hideSidebar: (state) => {
            state.value = false
            localStorage.setItem("SidebarVisibility", "false")
        },
        invertStateValue: (state) => {
            state.value = !state.value
            localStorage.setItem("SidebarVisibility", localStorage.getItem("SidebarVisibility") == "true" ? "false" : "true")
        }
    }
})

export const { showSidebar, hideSidebar, invertStateValue } = toggleSidebar.actions

export default toggleSidebar.reducer