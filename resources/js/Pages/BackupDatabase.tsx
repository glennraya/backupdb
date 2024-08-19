import { Head } from '@inertiajs/react'
import { DatabaseBackup, PageProps } from '@/types'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/Components/ui/table'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/Components/ui/card'
import {
    PiDatabaseDuotone,
    PiDatabaseFill,
    PiFloppyDiskDuotone,
    PiTrashDuotone
} from 'react-icons/pi'
import { Button } from '@/Components/ui/button'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function BackupDatabase({ auth }: PageProps) {
    const [backups, setBackups] = useState<DatabaseBackup[]>([])

    // Load all generated backups.
    useEffect(() => {
        axios.post('/get-backups').then(response => {
            setBackups(response.data)
        })
    }, [])

    // Perform the backup process.
    const [isBackingUp, setIsBackingUp] = useState(false)
    const backup = () => {
        setIsBackingUp(true)
        axios
            .post('/backup')
            .then(response => {
                setIsBackingUp(false)
            })
            .catch(error => {})
    }

    const download = (path: string) => {
        window.location.href = `/download-backup/${path}`
    }

    const deleteBackup = (path: string, id: number) => {
        axios
            .post('/delete-backup', {
                id: id,
                backup_file: path
            })
            .then(response => {
                setBackups(prevBackups => {
                    return prevBackups.filter(backup => backup.path !== path)
                })
            })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-2xl font-black">System Maintenance</h2>}
        >
            <Head title="Dashboard" />

            <div className="flex flex-col gap-4 overflow-y-scroll scroll-smooth py-4">
                <div className="grid gap-4 px-8 xl:grid-cols-7">
                    <Card className="relative h-fit w-full overflow-hidden xl:col-span-5">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between text-2xl font-bold">
                                <span>Database Backups</span>
                                <span>
                                    <PiDatabaseDuotone className="size-7" />
                                </span>
                            </CardTitle>
                            <CardDescription>
                                Recent database backups.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="relative flex flex-col gap-2">
                            <Button
                                className="flex items-center gap-2 self-start hover:bg-gray-600 active:bg-black dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                                onClick={backup}
                                disabled={isBackingUp}
                            >
                                <PiFloppyDiskDuotone className="size-5" />
                                <span>Backup now</span>
                            </Button>
                            {backups.length > 0 ? (
                                <Table className="mb-4 h-full">
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>File</TableHead>
                                            <TableHead
                                                colSpan={2}
                                                className="hidden sm:table-cell"
                                            >
                                                Backed up since
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {backups?.map((backup, index) => (
                                            <TableRow key={backup.id}>
                                                <TableCell>
                                                    <div className="flex items-center gap-2 font-mono font-medium">
                                                        <PiDatabaseFill className="size-5" />
                                                        <span>
                                                            {backup.path}
                                                        </span>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="sm:table-cell">
                                                    {backup.created_at}
                                                </TableCell>
                                                <TableCell className="text-right sm:table-cell">
                                                    <div className="flex justify-end gap-2">
                                                        <Button
                                                            variant="secondary"
                                                            onClick={() =>
                                                                download(
                                                                    backup.path
                                                                )
                                                            }
                                                        >
                                                            Download
                                                        </Button>
                                                        <Button
                                                            size="icon"
                                                            variant="destructive"
                                                            onClick={() =>
                                                                deleteBackup(
                                                                    backup.path,
                                                                    backup.id
                                                                )
                                                            }
                                                        >
                                                            <PiTrashDuotone className="size-5" />
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            ) : (
                                <div className="mt-2 rounded-lg bg-gray-100 py-4 text-center text-sm text-gray-500 dark:bg-gray-800 dark:text-white">
                                    The database has never been backed up.
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
