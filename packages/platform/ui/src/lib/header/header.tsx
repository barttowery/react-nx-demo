import { Button } from '@react-nx-demo/shared-ui';
import { Theme } from '@react-nx-demo/platform-models';
import { SquareCodeIcon, MoonStarIcon, SunIcon, PaletteIcon } from 'lucide-react';
import MainNavigation from '../main-navigation/main-navigation';
import NavigationSheet from '../navigation-sheet/navigation-sheet';
import { Link } from 'react-router-dom';

export interface HeaderProps {
  currentTheme: Theme;
  onToggleColor: () => void;
  onToggleLightModel: () => void;
}
export function Header({
  currentTheme = { color: 'green', lightMode: 'light'},
  onToggleColor,
  onToggleLightModel,
}: HeaderProps) {
  return (
    <header className='sticky top-0 z-50 flex min-h-20 w-full shrink-0 items-center justify-center border-b border-border backdrop-blur-sm bg-background'>
      <div className='mx-auto flex h-full w-full max-w-350 items-center min-[1800px]:max-w-384'>
        <div className='flex w-full items-center justify-between gap-2 px-4 max-lg:gap-4 sm:px-6 lg:px-8'>
          <Link aria-label='React Nx Demo' to="/">
            <div className='flex items-center justify-between gap-2 px-4 max-lg:gap-4 sm:px-6 lg:px-8 max-[550px]:[&_span]:hidden'>
              <SquareCodeIcon className='size-8.5 text-primary' />
              <span className='text-xl font-bold text-foreground'>React Nx Demo</span>
            </div>
          </Link>
          <div className='flex items-center justify-end gap-2 lg:justify-between'>
            <div className='min-[1000px]:hidden flex items-center'>
              <NavigationSheet />
            </div>
            <div className='max-[1000px]:hidden flex items-center'>
              <MainNavigation />
            </div>
            <div className='flex items-center gap-2 lg:gap-4'>
              {currentTheme.lightMode === 'light' ? (
                <Button aria-label='Switch to Dark Mode' size='icon' variant='outline' onClick={onToggleLightModel}>
                  <MoonStarIcon />
                </Button>
              ) : (
                <Button aria-label='Switch to Light Mode' size='icon' variant='outline' onClick={onToggleLightModel}>
                  <SunIcon />
                </Button>
              )}
              {currentTheme.color === 'green' ? (
                <Button aria-label='Change to Blue Theme' size='icon' variant='outline' onClick={onToggleColor}>
                  <PaletteIcon style={{color: '#1447E6'}} />
                </Button>
              ) : (
                <Button aria-label='Change to Green Theme' size='icon' variant='outline' onClick={onToggleColor}>
                  <PaletteIcon style={{color: '#007A55'}} />
                </Button>
              )}
              <Button className='max-[1000px]:hidden' aria-label='Go to GitHub' size='icon' variant='outline' asChild>
                <a href="https://github.com/barttowery/react-nx-demo" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" className="size-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
