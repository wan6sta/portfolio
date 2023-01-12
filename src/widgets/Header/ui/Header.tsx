import cls from './Header.module.scss'
import { Links } from './Links/Links'
import { Nav } from './Nav/Nav'

export const Header = () => {
  return (
    <header className={cls.Header}>
      <div className={cls.scrollBar}>
        <div className={cls.logo}>
          <div className={cls.img}></div>
          <h5>Ivan Korablin</h5>
        </div>
        <Nav />
      </div>
      <Links />
    </header>
  )
}
