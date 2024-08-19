import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from '@/Components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar'
import { router } from '@inertiajs/react'
import { User } from '@/types'
import { PiArrowDownBold } from 'react-icons/pi'
import { useState } from 'react'

const UserDropdownMenu = ({ user }: { user: User }) => {
    const [dropDownOpen, setDropDownOpen] = useState(false)
    const toggleDropdown = () => {
        setDropDownOpen(dropDownOpen => !dropDownOpen)
    }

    return (
        <DropdownMenu onOpenChange={() => toggleDropdown()}>
            <DropdownMenuTrigger asChild>
                <div className="flex cursor-pointer items-center">
                    <Avatar className="size-8">
                        <AvatarImage
                            src="/images/avatar.jpg"
                            alt="@glennraya"
                        />
                        <AvatarFallback>GR</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col p-2 text-xs font-medium">
                        <span className="text-sm">
                            {user.name}
                        </span>
                        <span className="text-gray-400">{user.email}</span>
                    </div>
                    <PiArrowDownBold
                        className={`transition duration-300 ease-in-out ${dropDownOpen ? 'rotate-180' : 'rotate-0'}`}
                    />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" collisionPadding={25}>
                <DropdownMenuGroup>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Keyboard shortcuts</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            Invite users
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>Email</DropdownMenuItem>
                                <DropdownMenuItem>Message</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>More...</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>New Team</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem disabled>API</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() => {
                        router.post('/logout')
                    }}
                >
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdownMenu
