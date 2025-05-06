'use client';

import * as React from 'react';

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar';
import { NavMain } from './sidebar/nav-main';
import { NavUser } from './sidebar/nav-user';
import { NavProjectsSwitcher } from './sidebar/nav-projects-switcher';
import { ThemeTogler } from './header/ThemeToggle';

import data from './sidebar-data';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar className="sidebar-container" collapsible="icon" {...props}>
            <SidebarHeader>
                <NavProjectsSwitcher />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                {/* <NavProjects projects={data.projects} /> */}
                {/* <ThemeTogler /> */}
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            {/* <SidebarRail /> */}
        </Sidebar>
    );
}
