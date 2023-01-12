import { Header } from 'widgets/Header'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { useTheme } from './providers/ThemeProvider'
import { cn } from 'shared/lib/cn/cn'
import { Home } from 'widgets/Main'
import { Skills } from 'widgets/Skills'
import { Portfolio } from 'widgets/Portfolio'
import { Contact } from 'widgets/Contact'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={cn('app', {}, [theme])}>
      <Header />
      <main className='main'>
        <Home />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <ThemeSwitcher />
    </div>
  )
}
