import { forwardRef } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@react-nx-demo/shared-ui";

interface ListItemProps extends React.ComponentPropsWithoutRef<"li"> {
  href: string;
}

export function MainNavigation() {
const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ title, children, href, className, ...props }, ref) => {
    return (
      <li ref={ref} className={className} {...props}>
        <NavigationMenuLink asChild>
          <a href={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              <div className="line-clamp-2 text-muted-foreground">{children}</div>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Coming Soon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/coming" title="Introduction">
                Re-usable components built with Tailwind CSS.
              </ListItem>
              <ListItem href="/coming" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/coming" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/overview">Component Overview</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/sales">Sales Demo</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MainNavigation;
