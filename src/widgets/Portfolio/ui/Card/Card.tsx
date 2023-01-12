import cls from './Card.module.scss'
import { FC } from 'react'

export interface CardProps {
  title: string
  description: string
  cardImg: string
}

export const Card: FC<CardProps> = props => {
  const { cardImg, description, title } = props

  return (
    <div className={cls.Card}>
      <div className={cls.desc}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={cls.card}>
        <div
          style={{ backgroundImage: `url(${cardImg})` }}
          className={cls.cardImg}
        ></div>
      </div>
    </div>
  )
}
