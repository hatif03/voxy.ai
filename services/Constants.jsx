const { LayoutDashboard, Calendar, List, WalletCards, Settings } = require("lucide-react");

export const SideBarOptions = [
    {
        name: 'Dashboard',
        icon: LayoutDashboard,
        path: '/dashboard',
    },
    {
        name: 'Schedule Interview',
        icon: Calendar,
        path: '/schedule-interview',
    },
    {
        name: 'All Interview',
        icon: List,
        path: '/all-interview',
    },
    {
        name: 'Billing',
        icon: WalletCards,
        path: '/billing',
    },
    {
        name: 'Settings',
        icon: Settings,
        path: '/settings',
    },

]