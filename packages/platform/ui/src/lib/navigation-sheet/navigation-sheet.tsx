import {
  Button,
  Separator,
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@react-nx-demo/shared-ui';
import { BadgeDollarSign, Menu, Sparkles, SquareCode, User, Workflow } from 'lucide-react';
import { useState } from 'react';
import { Link } from "react-router-dom";

export function NavigationSheet() {
  const [ open, setOpen ] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size='icon' variant='outline'><Menu /></Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <div className='flex h-full flex-col'>
          <div className='flex justify-between px-8 py-4'>
            <a href="/">
              <div className="flex items-center gap-2.5 w-fit">
                <SquareCode className='size-8.5 text-primary' />
                <span className='text-xl font-bold text-foreground'>React Nx Demo</span>
              </div>
            </a>
          </div>
          <div className='flex grow flex-col gap-0.5 overflow-y-auto px-4 pb-6'>
            <span className='flex items-center gap-2 px-4 py-2 text-foreground text-base'>Demos</span>
            <Link className="flex items-center gap-2 px-4 py-2 text-muted-foreground" onClick={() => setOpen(false)} to="/overview">
              <Sparkles />
              Component Overview
            </Link>
            <Link className="flex items-center gap-2 px-4 py-2 text-muted-foreground" onClick={() => setOpen(false)} to="/workflow">
              <Workflow />
              Workflow Demo
            </Link>
            <Separator />
            <Link className="flex items-center gap-2 px-4 py-2 text-muted-foreground" onClick={() => setOpen(false)} to="/sales">
              <BadgeDollarSign />
              Sales Demo
            </Link>
            <Separator />
            <a className="flex items-center gap-2 px-4 py-2 text-muted-foreground" onClick={() => setOpen(false)} href="/overview/about">
              <User />
              About Me
            </a>
            <Separator />
            <a className="flex items-center gap-2 px-4 py-2 text-muted-foreground" href="https://github.com/barttowery" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" className="size-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              GitHub - Solution Code
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default NavigationSheet;
