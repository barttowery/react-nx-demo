import { forwardRef } from "react";
import { Link } from "react-router-dom";
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
            <Link to={href}>
              <div className="flex flex-col gap-1 text-sm">
                <div className="leading-none font-medium">{title}</div>
                <div className="line-clamp-2 text-muted-foreground">{children}</div>
              </div>
            </Link>
          </NavigationMenuLink>
        </li>
      );
    }
  );

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Demos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/overview" title="Component Overview">
                Page with various examples to see overall look and feel.
              </ListItem>
              <ListItem href="/workflow" title="Workflow Demo">
                Demo of a workflow visualization using React Flow.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/sales">Sales Demo</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/overview/about">About Me</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MainNavigation;
