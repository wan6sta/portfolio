import cls from './Header.module.scss'
import { Links } from './Links/Links'
import { Nav } from './Nav/Nav'
import { useState } from 'react'
import { MenuBtn } from './MenuBtn/MenuBtn'
import { cn } from 'shared/lib/cn/cn'

export const Header = () => {
  const [showBtn, setShowBtn] = useState(false)

  const toggleShowBtn = () => {
    setShowBtn(prev => !prev)
  }

  return (
    <header className={cn(cls.Header, { [cls.showHeader]: showBtn })}>
      <div className={cls.scrollBar}>
        <div className={cls.logo}>
          <div className={cls.img}></div>
          <h5>Ivan Korablin</h5>
        </div>
        <Nav />
      </div>
      <Links />
      <MenuBtn onClick={toggleShowBtn} />
    </header>
  )
}
