"use client";

import { FaRegLightbulb } from "react-icons/fa";
import styles from '@/styles/layout/_header.module.scss'
import { useTheme } from "next-themes";
import { useIsMounted } from "usehooks-ts";

const ThemeSwitch = () => {

  const isMounted = useIsMounted()
  const { theme, setTheme } = useTheme()

  const toggleThemeChange = () => {
    const toggle = theme === 'light' ? 'dark' : 'light'
    setTheme(toggle)
  }

  if (!isMounted) {
    return null
  }

  return <div onClick={toggleThemeChange} className="dark-mode-switch">
    <FaRegLightbulb size={24} type="checkbox" className={styles.light} id="theme-toggle" />
  </div>
}

export default ThemeSwitch;