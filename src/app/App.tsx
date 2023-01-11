import { Header } from 'widgets/Header'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { useTheme } from './providers/ThemeProvider'
import { cn } from 'shared/lib/cn/cn'
import { Home } from 'widgets/Main'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={cn('app', {}, [theme])}>
      <Header />
      <ThemeSwitcher />
      <main className='main'>
        <Home />
      </main>
    </div>
  )
}
