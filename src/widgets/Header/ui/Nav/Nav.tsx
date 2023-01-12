import cls from './Nav.module.scss'
import {
  ChatBubbleLeftIcon,
  CommandLineIcon,
  CubeIcon,
  HomeIcon
} from '@heroicons/react/24/outline'
import React, { FC, ReactElement } from 'react'

export const enum SectionsId {
  home = 'home',
  skills = 'skills',
  portfolio = 'portfolio',
  contact = 'contact'
}

interface NavItem {
  title: string
  svg: ReactElement
  id: string
}

const navItems: NavItem[] = [
  { title: 'Home', svg: <HomeIcon />, id: SectionsId.home },
  { title: 'Skills', svg: <CommandLineIcon />, id: SectionsId.skills },
  { title: 'Portfolio', svg: <CubeIcon />, id: SectionsId.portfolio },
  { title: 'Contact me', svg: <ChatBubbleLeftIcon />, id: SectionsId.contact }
]

interface Props {
  hideNav: () => void
}

export const Nav: FC<Props> = ({ hideNav }) => {
  return (
    <nav className={cls.Nav}>
      {navItems.map(el => {
        return (
          <a onClick={hideNav} href={'#' + el.id}>
            {el.title}
          </a>
        )
      })}
    </nav>
  )
}
