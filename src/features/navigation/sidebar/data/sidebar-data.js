import {
    AudioWaveform,
    BookOpen,
    Users,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    Rocket,
    LayoutDashboard,
    Layers,
    ChartArea,
    ChartBar,
    ChartBarDecreasing,
    ChartLine,
    Star,
} from 'lucide-react';

export default {
    user: {
        name: 'shadcn',
        email: 'm@example.com',
        avatar: 'https://ui.shadcn.com/avatars/shadcn.jpg',
    },
    navMain: [
        {
            title: 'Main',
            url: '#',
            icon: Layers,
            isActive: true,
            items: [
                {
                    title: 'Summary',
                    url: '/',
                },
                {
                    title: 'Timeline',
                    url: '#',
                },
                {
                    title: 'Board',
                    url: '#',
                },
                {
                    title: 'Calendar',
                    url: '#',
                },
                {
                    title: 'All tasks',
                    url: '#',
                },
            ],
        },
        {
            title: 'Team',
            url: '/team',
            icon: Users,
            items: [
                {
                    title: 'Users',
                    url: '/team/users',
                },
                {
                    title: 'Roles',
                    url: '/team/users',
                },
            ],
        },
        {
            title: 'Dashoboards',
            url: '#',
            icon: LayoutDashboard,
            items: [
                {
                    title: 'My dashboard',
                    url: '#',
                },
                {
                    title: 'All dashboards',
                    url: '#',
                },
            ],
        },
        {
            title: 'Reports',
            url: '#',
            icon: ChartLine,
            items: [
                {
                    title: 'Users',
                    url: '#',
                },
                {
                    title: 'All',
                    url: '#',
                },
            ],
        },
        {
            title: 'Marked',
            url: '#',
            icon: Star,
            items: [
                {
                    title: 'Recent',
                    url: '#',
                },
                {
                    title: 'Starred',
                    url: '#',
                },
            ],
        },
        {
            title: 'Settings',
            url: '#',
            icon: Settings2,
            items: [
                {
                    title: 'General',
                    url: '#',
                },
                {
                    title: 'Team',
                    url: '#',
                },
                {
                    title: 'Billing',
                    url: '#',
                },
                {
                    title: 'Limits',
                    url: '#',
                },
            ],
        },
    ],
    projects: [
        {
            name: 'Design Engineering',
            url: '#',
            icon: Frame,
        },
        {
            name: 'Sales & Marketing',
            url: '#',
            icon: PieChart,
        },
        {
            name: 'Travel',
            url: '#',
            icon: Map,
        },
    ],
};
