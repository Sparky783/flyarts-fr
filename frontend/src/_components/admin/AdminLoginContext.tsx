import { createContext, useEffect, useState } from "react";

export interface AdminUser {
    name: string;
}

export const AdminAccountContext = createContext<{ user: AdminUser | null, setUserData: any }>(function() {
    return {
        user: null,
        setUserData: (user: any) => { }
    }
}())

export function AdminAccountProvider({ children }: { children: any }) {
    const [user, setUser] = useState(null);
    const setUserData = (user: any) => {
        console.log(user);
        localStorage.setItem('admin', JSON.stringify(user));
        setUser(user)
    }

    useEffect(()=>{
        const userData = localStorage.getItem('admin')
        setUserData(userData ? JSON.parse(userData) as AdminUser : null)
    }, [])

    return <AdminAccountContext.Provider value={{ user, setUserData }} >
        {children}
    </AdminAccountContext.Provider>
}