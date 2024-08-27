'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { PlusIcon, ReaderIcon } from '@radix-ui/react-icons';

export function MainNav() {
  return (
    <div className="min-h-16 flex gap-4 items-center">
      <NavigationMenu>
        <NavigationMenuList className="w-screen flex justify-center">
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger className="p-2">
              <ReaderIcon className="h-7 w-7" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/server-example" title="RSC Example">
                  Protecting React Server Component.
                </ListItem>
                <ListItem href="/middleware-example" title="Middleware Example">
                  Using Middleware to protect pages & APIs.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/operations"
              className={navigationMenuTriggerStyle()}
            >
              <ReaderIcon className="h-7 w-7" />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/operations/new"
              className={navigationMenuTriggerStyle()}
            >
              <PlusIcon className="h-7 w-7" />
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* 
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/client-example"
              className={navigationMenuTriggerStyle()}
            >
              Client Side
            </NavigationMenuLink>
          </NavigationMenuItem>
          */}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
