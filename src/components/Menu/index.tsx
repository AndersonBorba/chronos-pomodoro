import {
  HistoryIcon,
  HouseIcon,
  Lightbulb,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';
export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const localTheme = localStorage.getItem('theme');

    return localTheme === 'light' ? 'light' : 'dark';
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleChangeTheme(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(() => {
      return theme === 'dark' ? 'light' : 'dark';
    });
  }

  function handleHome(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.log('handleHome');
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a Home'
        title='Ir para a Home'
        onClick={handleHome}
      >
        <HouseIcon />
      </a>

      <a className={styles.menuLink} href='#'>
        <HistoryIcon />
      </a>

      <a className={styles.menuLink} href='#'>
        <SettingsIcon />
      </a>

      <a className={styles.menuLink} href='#' onClick={handleChangeTheme}>
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
