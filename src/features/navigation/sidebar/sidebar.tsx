'use client';

import * as React from 'react';

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar';
import { NavMain } from './components/sidebar-main';
import { NavUser } from './components/sidebar-user';
import { NavProjectsSwitcher } from './components/sidebar-projects';
import { ThemeTogler } from '../../theme/components/theme-toggle';

import data from './data/sidebar-data';

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
