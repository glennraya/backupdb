import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/Components/ui/card'
import { PiCurrencyCircleDollarDuotone } from 'react-icons/pi'

const MonthlyRevenue = () => {
    return (
        <Card className="col-span-2 transition duration-300 ease-linear hover:bg-gray-50 xl:col-span-1 dark:hover:bg-gray-800">
            <CardHeader>
                <CardTitle className="flex items-center justify-between text-2xl font-bold">
                    <span>$154,561.64</span>
                    <span>
                        <PiCurrencyCircleDollarDuotone className="size-7" />
                    </span>
                </CardTitle>
                <CardDescription>Total Revenue (September)</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="font-medium text-green-600">
                    <span className="font-bold">+15%</span> from last month
                </p>
            </CardContent>
        </Card>
    )
}

export default MonthlyRevenue
