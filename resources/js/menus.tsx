import {
    PiLayoutDuotone,
    PiFilesDuotone,
    PiUsersThreeDuotone,
    PiChartLineUpDuotone,
    PiWarehouseDuotone,
    PiUsersDuotone,
    PiHandTapDuotone,
    PiChartPieDuotone,
    PiTrafficSignalDuotone,
    PiMoneyWavyDuotone,
    PiDatabaseDuotone,
    PiNoteDuotone,
    PiQuestionDuotone,
    PiLifebuoyDuotone,
    PiMegaphoneDuotone
} from 'react-icons/pi'

type MenuItem = {
    label: string
    icon: React.JSX.Element | null
    href?: string | null
}

const menuItems: MenuItem[] = [
    {
        label: 'Dashboard',
        icon: <PiLayoutDuotone className="size-5" />,
        href: '/dashboard'
    },
    {
        label: 'Transactions',
        icon: <PiFilesDuotone className="size-5" />,
        href: '/transactions'
    },
    {
        label: 'Inventory',
        icon: <PiWarehouseDuotone className="size-5" />,
        href: '/inventory'
    },
    {
        label: 'Analytics',
        icon: <PiChartLineUpDuotone className="size-5" />,
        href: '/analytics'
    },
    {
        label: 'separator',
        icon: null
        // href: undefined
    },
    {
        label: 'Subscribers',
        icon: <PiUsersThreeDuotone className="size-5" />,
        href: '/subscribers'
    },
    {
        label: 'Clients',
        icon: <PiUsersDuotone className="size-5" />,
        href: '/clients'
    },
    {
        label: 'User Engagements',
        icon: <PiHandTapDuotone className="size-5" />,
        href: '/clients'
    },
    {
        label: 'separator',
        icon: null
        // href: undefined
    },
    {
        label: 'Reports',
        icon: <PiChartPieDuotone className="size-5" />,
        href: '/reports'
    },
    {
        label: 'Traffic Analysis',
        icon: <PiTrafficSignalDuotone className="size-5" />,
        href: '/traffic-analysis'
    },
    {
        label: 'Sales Data',
        icon: <PiMoneyWavyDuotone className="size-5" />,
        href: '/sales-data'
    },
    {
        label: 'separator',
        icon: null
        // href: undefined
    },
    {
        label: 'System Maintenance',
        icon: <PiDatabaseDuotone className="size-5" />,
        href: '/system-maintenance'
    },
    {
        label: 'System Logs',
        icon: <PiNoteDuotone className="size-5" />,
        href: '/system-logs'
    },
    {
        label: 'separator',
        icon: null
        // href: undefined
    },
    {
        label: 'Help Center',
        icon: <PiLifebuoyDuotone className="size-5" />,
        href: '/help-support'
    },
    {
        label: 'FAQ',
        icon: <PiQuestionDuotone className="size-5" />,
        href: '/faq'
    },
    {
        label: 'separator',
        icon: null
        // href: undefined
    },
    {
        label: 'User Feedback',
        icon: <PiMegaphoneDuotone className="size-5" />,
        href: '/user-feedback'
    }
]

export default menuItems
