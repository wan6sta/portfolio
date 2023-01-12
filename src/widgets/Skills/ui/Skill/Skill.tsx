import cls from './Skill.module.scss'
import React from 'shared/assets/icons/react.svg'
import { FC, useState } from 'react'
import { cn } from 'shared/lib/cn/cn'

export interface SkillProps {
  title: string
  url: string
  description: string
}

export const Skill: FC<SkillProps> = props => {
  const { url, title, description } = props
  const [showDesc, setShowDesc] = useState(false)

  const showHandler = () => {
    if (!showDesc) {
      setShowDesc(prev => true)
    }
  }

  const hideHandler = () => {
    if (showDesc) {
      setShowDesc(prev => false)
    }
  }

  return (
    <div
      onMouseLeave={hideHandler}
      onMouseOver={showHandler}
      className={cls.Skill}
    >
      <div>
        <div style={{ backgroundImage: `url(${url})` }}></div>
      </div>
      <span className={cn(cls.desc, { [cls.descActive]: showDesc })}>
        {description}
      </span>
      <span>{title}</span>
    </div>
  )
}
