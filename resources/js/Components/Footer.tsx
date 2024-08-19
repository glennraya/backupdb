import {
    PiCurrencyCircleDollarDuotone,
    PiLightningDuotone,
    PiUsersFourDuotone
} from 'react-icons/pi'
import { Badge } from '@/Components/ui/badge'

const Footer = () => {
    return (
        <div className="bottom-0 right-0 z-10 flex w-full flex-col justify-between gap-4 border-t border-gray-200 bg-white px-8 py-4 xl:absolute xl:h-12 xl:flex-row xl:items-center xl:py-0 dark:border-gray-800 dark:bg-gray-900">
            <div className="absolute -top-4 left-0 h-4 w-full border-b border-gray-200 bg-gradient-to-t from-white dark:border-gray-800 dark:from-gray-900"></div>

            <div className="flex items-center gap-2">
                <PiUsersFourDuotone className="size-4" />
                <span className="font-mono text-xs font-medium">
                    Users Online: <span className="font-bold">1,455</span>
                </span>
            </div>

            <div className="flex items-center gap-2">
                <PiCurrencyCircleDollarDuotone className="size-4" />
                <span className="font-mono text-xs font-medium">
                    Today's Sale: <span className="font-bold">$3,298.75</span>
                </span>
            </div>

            <div className="flex items-center gap-2">
                <PiLightningDuotone className="size-4" />
                <span className="font-mono text-xs font-medium">
                    System Status:{' '}
                    <Badge variant="default" className="bg-green-500 font-bold">
                        Operational
                    </Badge>
                </span>
            </div>
        </div>
    )
}

export default Footer
