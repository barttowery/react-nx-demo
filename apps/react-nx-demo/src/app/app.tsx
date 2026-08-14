import { useState } from 'react';
import { Theme } from '@react-nx-demo/platform-models';
import { Header } from '@react-nx-demo/platform-ui';
import { Outlet } from 'react-router-dom';

export function App() {
  const [theme, setTheme ] = useState<Theme>({
    color: 'green',
    lightMode: window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches ? 'dark' : 'light'
  });

  const toggleColor = () => {
    if(theme.color === 'green') {
      setTheme({ color: 'blue', lightMode: theme.lightMode });
      document.documentElement.classList.toggle('blue', true);
    }
    else {
      setTheme({ color: 'green', lightMode: theme.lightMode });
      document.documentElement.classList.toggle('blue', false);
    }
  }

  const toggleLightMode = () => {
    if(theme.lightMode === 'light') {
      setTheme({ color: theme.color, lightMode: 'dark' });
      document.documentElement.classList.toggle('dark', true);
    }
    else {
      setTheme({ color: theme.color, lightMode: 'light' });
      document.documentElement.classList.toggle('dark', false);
    }
  }

  return (
    <div className='flex h-full w-full min-w-0 flex-col'>
      <Header
        currentTheme={theme}
        onToggleColor={toggleColor}
        onToggleLightModel={toggleLightMode}
      />
      <Outlet />
    </div>
  );
}

export default App;
