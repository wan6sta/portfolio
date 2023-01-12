import cls from './Nav.module.scss'
import {
  ChatBubbleLeftIcon,
  CommandLineIcon,
  CubeIcon,
  HomeIcon
} from '@heroicons/react/24/outline'

export const Nav = () => {
  return (
    <nav className={cls.Nav}>
      <a>
        <HomeIcon />
        <span>Home</span>
      </a>
      <a>
        <CommandLineIcon />
        <span>Skills</span>
      </a>
      <a>
        <CubeIcon />
        <span>Portfolio</span>
      </a>
      <a>
        <ChatBubbleLeftIcon />
        <span>Contact me</span>
      </a>
    </nav>
  )
}
