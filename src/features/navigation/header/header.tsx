'use client';

import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbPage,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useBreadcrumbs } from '@/features/navigation/breadcrumbs/provider';
import { Separator } from '@radix-ui/react-separator';
import { Fragment } from 'react';

export function AppHeader() {
    const { breadcrumbs } = useBreadcrumbs();

    if (!breadcrumbs.length) {
        return '';
    }

    return (
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                    <BreadcrumbList>
                        {breadcrumbs.map((crumb, index) => (
                            <Fragment key={`crumb-${index}`}>
                                <BreadcrumbItem className="hidden md:block">
                                    {crumb.href ? (
                                        <BreadcrumbLink href={crumb.href}>
                                            {crumb.title}
                                        </BreadcrumbLink>
                                    ) : (
                                        <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                                    )}
                                </BreadcrumbItem>
                                {index !== breadcrumbs.length - 1 && (
                                    <BreadcrumbSeparator className="hidden md:block" />
                                )}
                            </Fragment>
                        ))}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </header>
    );
}
