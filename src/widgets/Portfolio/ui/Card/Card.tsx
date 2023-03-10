import cls from './Card.module.scss'
import { FC } from 'react'

export interface CardProps {
  title: string
  description: string
  cardImg: string
  link: string
  git: string
}

export const Card: FC<CardProps> = props => {
  const { cardImg, description, title, link, git } = props

  return (
    <div className={cls.Card}>
      <div className={cls.desc}>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>
          More info on{' '}
          <a target='_blank' href={git}>
            github
          </a>
        </span>
      </div>
      <a target='_blank' href={link}>
        <div className={cls.card}>
          <div
            style={{ backgroundImage: `url(${cardImg})` }}
            className={cls.cardImg}
          ></div>
        </div>
      </a>
    </div>
  )
}
