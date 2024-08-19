import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/Components/ui/table'
import { useToast } from '@/Components/ui/use-toast'

import {
    Card,
    CardDescription,
    CardContent,
    CardHeader,
    CardTitle
} from '@/Components/ui/card'
import { Badge } from '@/Components/ui/badge'
import { Button } from '@/Components/ui/button'
import { PiEnvelopeDuotone } from 'react-icons/pi'
import { User } from '@/types'
import { useEffect, useState } from 'react'
import CustomTooltip from '@/Components/CustomTooltip'

const TaskEmails = ({ users, user }: { users: User[]; user: User }) => {
    const { toast } = useToast()

    const sendEmail = async (email: string) => {
        await axios
            .post('/send-task-email', {
                email: email
            })
            .then(res => {
                toast({
                    title: 'Sent!',
                    description: 'Your email has been sent.'
                })
            })
    }

    const [members, setMembers] = useState<User[]>(users)
    const [updateEmail, setUpdateEmail] = useState<string>('')

    useEffect(() => {
        Echo.private(`webhook.${user.id}`).listen('WebhookReceived', event => {
            setUpdateEmail(event.webhook_payload.data.to[0])
        })
    }, [])
    return (
        <Card className="relative h-fit w-full overflow-hidden">
            <CardHeader>
                <CardTitle className="flex items-center justify-between text-2xl font-bold">
                    <span>Task Emails for Developers</span>
                    <span>
                        <PiEnvelopeDuotone className="size-7" />
                    </span>
                </CardTitle>
                <CardDescription>
                    Sent project task emails to developers.
                </CardDescription>
            </CardHeader>
            <CardContent className="relative">
                <Table className="mb-4 h-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Member</TableHead>
                            <TableHead className="hidden text-right sm:table-cell">
                                Status
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {members?.data.map(user => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    <div className="font-medium">
                                        {user.name}
                                    </div>
                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                        {user.email}
                                    </div>
                                </TableCell>
                                <TableCell className="text-right sm:table-cell">
                                    <div className="flex items-center justify-end">
                                        <CustomTooltip label="Send task email">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                type="button"
                                                className="mr-2 active:bg-gray-300"
                                                onClick={() =>
                                                    sendEmail(user.email)
                                                }
                                            >
                                                <PiEnvelopeDuotone className="size-4" />
                                            </Button>
                                        </CustomTooltip>
                                        <Badge
                                            className={`text-xs dark:text-white ${user.task_checked_at !== null || user.email === updateEmail ? 'bg-green-500 text-white hover:bg-green-500' : 'text-black'}`}
                                            variant="secondary"
                                        >
                                            {updateEmail === user.email ||
                                            user.task_checked_at !== null
                                                ? 'Clicked'
                                                : 'Pending'}
                                        </Badge>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="flex justify-center gap-2 xl:justify-end">
                    <Button variant="outline" size="sm" type="button">
                        Prev
                    </Button>
                    <Button variant="outline" size="sm" type="button">
                        Next
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default TaskEmails
