import cls from './ThemeSwitcher.module.scss'
import { cn } from 'shared/lib/cn/cn'
import { useTheme } from 'app/providers/ThemeProvider'
import { MoonIcon } from '@heroicons/react/24/solid'

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      onClick={toggleTheme}
      className={cn(cls.ThemeSwitcher, {}, [cls[theme]])}
    >
      <MoonIcon />
    </div>
  )
}
