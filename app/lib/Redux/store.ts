import { configureStore } from '@reduxjs/toolkit'
import SidebarVisibility from "@/app/lib/Redux/Features/toggleSidebar"

export const makeStore = () => {
    return configureStore({
        reducer: {
            SidebarVisibility: SidebarVisibility
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']