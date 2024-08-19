import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/Components/ui/card'
import { PiSuitcaseSimpleDuotone } from 'react-icons/pi'

const Applicants = () => {
    return (
        <Card className="transition duration-300 ease-linear hover:bg-gray-50 dark:hover:bg-gray-800">
            <CardHeader>
                <CardTitle className="flex items-center justify-between text-2xl font-bold">
                    <span>387</span>
                    <span>
                        <PiSuitcaseSimpleDuotone className="size-7" />
                    </span>
                </CardTitle>
                <CardDescription>Pending Job Applications</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="font-medium text-green-600">
                    <span className="font-bold">+45</span> hired last month
                </p>
            </CardContent>
        </Card>
    )
}

export default Applicants
