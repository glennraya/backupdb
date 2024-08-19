import { Button } from '@/Components/ui/button'
import { PiBellFill, PiChatCenteredDotsFill } from 'react-icons/pi'
import { ReactNode } from 'react'
import { User } from '@/types'
import SearchButton from './SearchButton'
import UserDropdownMenu from './UserDropdownMenu'

const AppHeader = ({ user, header }: { user: User; header?: ReactNode }) => {
    return (
        <div className="flex h-20 w-full shrink-0 items-center justify-between border-b border-gray-200 px-8 dark:border-gray-800">
            {header}
            <div className="flex w-80 items-center">
                <SearchButton />
            </div>
            <div className="flex items-center gap-2">
                <div className="mr-4 flex gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative rounded-full"
                    >
                        <span className="absolute -right-1 -top-2 flex size-6 items-center justify-center rounded-full border-2 border-white bg-red-600 text-xs font-bold text-white dark:border-gray-800">
                            5
                        </span>
                        <PiChatCenteredDotsFill className="size-8" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative rounded-full"
                    >
                        <span className="absolute -right-1 -top-2 flex size-6 items-center justify-center rounded-full border-2 border-white bg-red-600 text-xs font-bold text-white dark:border-gray-800">
                            8
                        </span>
                        <PiBellFill className="size-8" />
                    </Button>
                </div>{' '}
                <UserDropdownMenu user={user} />
            </div>
        </div>
    )
}

export default AppHeader
