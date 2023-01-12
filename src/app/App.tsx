import { useTheme } from './providers/ThemeProvider'
import { cn } from 'shared/lib/cn/cn'
import { Home } from 'widgets/Main'
import { Skills } from 'widgets/Skills'
import { Portfolio } from 'widgets/Portfolio'
import { Contact } from 'widgets/Contact'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { Header } from 'widgets/Header'
import { Particle } from '../widgets/Particles'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={cn('app', {}, [theme])}>
      <Particle />
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
