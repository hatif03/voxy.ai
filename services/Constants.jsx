const { LayoutDashboard, Calendar, List, WalletCards, Settings, Code2Icon, User2Icon, BriefcaseBusinessIcon, Puzzle, GroupIcon } = require("lucide-react");

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


export const InterviewType = [
    {
        title: 'Technical',
        icon: Code2Icon
    },
    {
        title: 'Behavioral',
        icon: User2Icon
    },
    {
        title: 'Experience',
        icon: BriefcaseBusinessIcon
    },
    {
        title: 'Problem Solving',
        icon: Puzzle
    },
    {
        title: 'Leadership',
        icon: GroupIcon
    }
]