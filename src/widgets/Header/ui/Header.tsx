import cls from './Header.module.scss'
import {
  ChatBubbleLeftIcon,
  CommandLineIcon,
  CubeIcon,
  HomeIcon
} from '@heroicons/react/24/outline'
import { ReactComponent as PortfolioIcon } from 'shared/assets/icons/portfolioIcon.svg'
import { EnvelopeIcon, PhoneArrowUpRightIcon } from '@heroicons/react/24/solid'

export const Header = () => {
  return (
    <header className={cls.Header}>
      <div className={cls.scrollBar}>
        <div className={cls.logo}>
          <div className={cls.img}></div>
          <h5>Ivan Korablin</h5>
        </div>
        <nav className={cls.links}>
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
      </div>
      <div className={cls.socials}>
        <a href='tel:+79814412617' className={cls.phone}>
          <PhoneArrowUpRightIcon />
        </a>
        <a href='mailto:wan6sta@gmail.com' className={cls.gmail}>
          <EnvelopeIcon />
        </a>
        <a
          href='https://drive.google.com/file/d/1MLbB7KNFlR84kjmIUj8LSAgZe0TEpN5l/view?usp=sharing'
          target='_blank'
          className={cls.cv}
        >
          <PortfolioIcon />
        </a>
      </div>
    </header>
  )
}
