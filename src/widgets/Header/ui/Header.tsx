import cls from './Header.module.scss'
import { Links } from './Links/Links'
import { Nav } from './Nav/Nav'
import { useEffect, useRef, useState } from 'react'
import { MenuBtn } from './MenuBtn/MenuBtn'
import { cn } from 'shared/lib/cn/cn'

export const Header = () => {
  const [showBtn, setShowBtn] = useState(false)
  const headerRef = useRef<null | HTMLDivElement>(null)
  const btnRef = useRef<null | HTMLButtonElement>(null)

  const toggleShowBtn = () => {
    setShowBtn(prev => !prev)
  }

  const hideNav = () => {
    setShowBtn(false)
  }

  const clickWindow = (e: MouseEvent) => {
    if (headerRef.current && btnRef.current) {
      const isIncludeHeader = e.composedPath().includes(headerRef.current)
      const isIncludeBtn = e.composedPath().includes(btnRef.current)
      if (!isIncludeHeader && !isIncludeBtn) {
        setShowBtn(false)
      }
    }
  }

  useEffect(() => {
    const root = document.getElementById('root')
    root && root.addEventListener('click', clickWindow)
    return () => {
      root && root.removeEventListener('click', clickWindow)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className={cn(cls.Header, { [cls.showHeader]: showBtn })}
    >
      <div className={cls.scrollBar}>
        <div className={cls.logo}>
          <div className={cls.img}></div>
          <h5>Ivan Korablin</h5>
        </div>
        <Nav hideNav={hideNav} />
      </div>
      <Links />
      <MenuBtn ref={btnRef} onClick={toggleShowBtn} />
    </header>
  )
}
