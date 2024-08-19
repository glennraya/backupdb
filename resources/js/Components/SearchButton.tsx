const SearchButton = ({ className = '' }: { className?: string }) => {
    return (
        <div className={className}>
            <button
                type="button"
                className="dark:highlight-white/5 z-30 hidden w-96 items-center space-x-3 rounded-lg bg-gray-100 px-2 py-2 text-left text-gray-500 shadow-sm ring-1 ring-gray-300 transition duration-300 ease-in-out hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:flex dark:bg-black dark:text-gray-300 dark:ring-1 dark:ring-gray-800 dark:hover:bg-black dark:hover:ring-gray-700"
            >
                <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-none text-gray-400"
                    aria-hidden="true"
                >
                    <path d="m19 19-3.5-3.5"></path>
                    <circle cx="11" cy="11" r="6"></circle>
                </svg>
                <span className="flex-auto">Search data</span>
                <kbd className="rounded-md border border-gray-300 bg-white px-2 py-1 font-sans text-xs font-semibold shadow-sm dark:border-gray-800 dark:bg-gray-800">
                    <abbr
                        title="Command"
                        className="text-gray-500 no-underline"
                    >
                        ⌘
                    </abbr>{' '}
                    K
                </kbd>
            </button>
        </div>
    )
}

export default SearchButton
