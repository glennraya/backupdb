import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/Components/ui/card'
import { PiUserSoundDuotone } from 'react-icons/pi'

const UserEngagement = () => {
    return (
        <Card className="col-span-2 transition duration-300 ease-linear hover:bg-gray-50 xl:col-span-1 dark:hover:bg-gray-800">
            <CardHeader>
                <CardTitle className="flex items-center justify-between text-2xl font-bold">
                    <span>1,329</span>
                    <span>
                        <PiUserSoundDuotone className="size-7" />
                    </span>
                </CardTitle>
                <CardDescription>Average Daily Active Users</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="font-medium text-green-600">
                    <span className="font-bold">+8%</span> from yesterday
                </p>
            </CardContent>
        </Card>
    )
}

export default UserEngagement
