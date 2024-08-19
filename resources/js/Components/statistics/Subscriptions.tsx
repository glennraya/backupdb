import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/Components/ui/card'
import { PiUsersThreeDuotone } from 'react-icons/pi'

const Subscriptions = () => {
    return (
        <Card className="transition duration-300 ease-linear hover:bg-gray-50 dark:hover:bg-gray-800">
            <CardHeader>
                <CardTitle className="flex items-center justify-between text-2xl font-bold">
                    <span>109</span>
                    <span>
                        <PiUsersThreeDuotone className="size-7" />
                    </span>
                </CardTitle>
                <CardDescription>Subscriptions this month</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="font-medium text-green-600">
                    <span className="font-bold">+561</span> last month
                </p>
            </CardContent>
        </Card>
    )
}

export default Subscriptions
