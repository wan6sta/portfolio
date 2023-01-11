import cls from './Skill.module.scss'
import React from 'shared/assets/icons/react.svg'
import { FC } from 'react'

export interface SkillProps {
  title: string
  url: string
}

export const Skill: FC<SkillProps> = ({ url, title }) => {
  return (
    <div className={cls.Skill}>
      <div>
        <div style={{ backgroundImage: `url(${url})` }}></div>
      </div>
      <span>{title}</span>
    </div>
  )
}
