import menuItems from '@/menus'
import SearchMenu from '@/Components/SearchMenu'
import { Link, usePage } from '@inertiajs/react'

const Navigation = () => {
    const { url } = usePage()
    return (
        <nav className="flex flex-col gap-y-1 py-4 text-sm font-medium xl:h-[85%] xl:overflow-y-scroll 2xl:h-auto">
            <div className="mb-2 px-3">
                <SearchMenu />
            </div>
            {menuItems.map((menu, index) =>
                menu.label === 'separator' ? (
                    <div
                        key={`separator-${index}`}
                        className="my-2 w-full border-t border-gray-200 dark:border-gray-800"
                    ></div>
                ) : (
                    <Link
                        key={`menu-${index}`}
                        href={menu.href ?? '#'}
                        className={`mx-3 flex items-center gap-2 rounded-lg px-3 py-2 ${url === menu.href ? 'bg-black text-white dark:border-gray-800 dark:hover:bg-black' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    >
                        {menu.icon}
                        <span>{menu.label}</span>
                    </Link>
                )
            )}
        </nav>
    )
}

export default Navigation
