import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/Components/ui/tooltip'

const CustomTooltip = ({ label, children }: { label: string }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent className="border border-gray-200 bg-white text-black shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                    <p>{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default CustomTooltip
