import { PropsWithChildren, ReactNode, useEffect, useState } from 'react'
import { User } from '@/types'
import Navigation from '@/Components/Navigation'
import Footer from '@/Components/Footer'
import AppHeader from '@/Components/AppHeader'
import CustomToaster from '@/Components/CustomToaster'

interface EventResponse {
    user_id: number
    message: string
    backup_file: string
}

export default function Authenticated({
    user,
    header,
    children
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [showToaster, setShowToaster] = useState<Boolean>(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        const echoInstance = (window as any).Echo
        echoInstance
            .private(`backup.${user.id}`)
            .listen('BackupCompleted', (event: EventResponse) => {
                setShowToaster(true)
                setMessage(event.message)
            })
    }, [])

    const handleCloseToaster = () => {
        setShowToaster(false)
    }
    return (
        <div className="relative min-h-dvh bg-gray-200 dark:bg-black">
            {showToaster && (
                <CustomToaster
                    message={message}
                    closeToaster={handleCloseToaster}
                />
            )}
            <div className="flex p-3 2xl:h-dvh">
                <div className="flex w-full rounded-xl shadow-sm dark:bg-gray-900">
                    {/* Sidebar */}
                    <div className="max-h-vh hidden h-full w-96 flex-col justify-between overflow-y-auto rounded-s-xl border border-gray-200 bg-white xl:flex dark:border-gray-800 dark:bg-gray-900">
                        <div className="flex flex-col">
                            <header className="flex h-20 shrink-0 items-center justify-center gap-2 border-b border-gray-200 dark:border-gray-800">
                                <img
                                    src="/images/sample-logo.svg"
                                    alt="Logo"
                                    className="size-6 dark:text-white"
                                />

                                <h1 className="font-bold">
                                    Untitled Admin v1.0
                                </h1>
                            </header>

                            {/* Main navigation */}
                            <Navigation />
                        </div>
                        <div className="flex justify-start p-4 text-xs text-gray-400 dark:text-gray-600">
                            <span>Untitled Admin v1.0</span>
                        </div>
                    </div>
                    {/* End of sidebar */}

                    {/* Main contents */}
                    <div className="relative flex w-full flex-col overflow-hidden rounded-xl border-b border-e border-r border-t border-gray-200 bg-white xl:rounded-e-xl xl:rounded-s-none dark:border-gray-800 dark:bg-gray-900">
                        {/* Main header */}
                        <AppHeader user={user} header={header} />
                        {/* End of main header */}

                        <main className="relative flex grow flex-col overflow-y-auto xl:pb-12">
                            <div className="absolute left-0 top-0 z-10 h-4 w-full bg-gradient-to-b from-white dark:from-gray-900"></div>
                            {children}
                        </main>

                        {/* Footer */}
                        <Footer />
                        {/* End of footer */}
                    </div>
                </div>
            </div>
        </div>
    )
}
