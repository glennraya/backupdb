import { PiInfoDuotone, PiX } from 'react-icons/pi'

const CustomToaster = ({
    message,
    closeToaster
}: {
    message: string
    closeToaster: () => void
}) => {
    return (
        <div className="absolute right-6 top-6 z-20 flex min-h-6 flex-col gap-2 rounded-lg bg-green-600 p-4 text-white shadow-lg">
            <PiX
                className="absolute right-4 top-4 size-5 cursor-pointer transition duration-300 ease-in-out hover:scale-125"
                onClick={closeToaster}
            />
            <h3 className="flex items-center gap-2 font-medium">
                <PiInfoDuotone className="size-5" />
                <span>Database Backup</span>
            </h3>
            <p className="flex text-sm">{message}</p>
        </div>
    )
}

export default CustomToaster
