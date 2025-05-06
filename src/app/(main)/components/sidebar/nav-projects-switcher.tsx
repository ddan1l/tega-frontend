import * as React from 'react';
import { ChevronsUpDown, GalleryVerticalEnd, Plus } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar';
import { useProjectsContext } from '@/providers/project-provider';
import { projectHref } from '@/utils/project-href';
import Link from 'next/link';

export function NavProjectsSwitcher() {
    const { isMobile } = useSidebar();

    const { projects, activeProject, setActiveProject } = useProjectsContext();

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                {/* <activeTeam.logo className="size-4" /> */}
                                <GalleryVerticalEnd className="size-4" />
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">
                                    {activeProject ? activeProject.name : ''}
                                </span>
                                <span className="truncate text-xs">
                                    {activeProject ? activeProject.description : ''}
                                </span>
                            </div>
                            <ChevronsUpDown className="ml-auto" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                        align="start"
                        side={isMobile ? 'bottom' : 'right'}
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="text-xs text-muted-foreground">
                            Projects
                        </DropdownMenuLabel>
                        {projects.map((project, index) => (
                            <DropdownMenuItem key={project.name} asChild>
                                <Link
                                    href={projectHref(project?.slug || '')}
                                    className="gap-2 p-2"
                                    onClick={() => setActiveProject(project)}
                                >
                                    <div className="flex size-6 items-center justify-center rounded-sm border">
                                        <GalleryVerticalEnd className="size-4 shrink-0" />
                                    </div>
                                    {project.name}
                                    <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                                </Link>
                            </DropdownMenuItem>
                        ))}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-2 p-2">
                            <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                                <Plus className="size-4" />
                            </div>
                            <div className="font-medium text-muted-foreground">Add project</div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
