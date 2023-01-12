import cls from './Title.module.scss'
import { FC, PropsWithChildren } from 'react'

interface Props {
  bgTitle: string
}

export const Title: FC<PropsWithChildren<Props>> = ({ bgTitle, children }) => {
  return (
    <div className={cls.Title}>
      <h2>{children}</h2>
      <span className={cls.bgTitle}>{bgTitle.toUpperCase()}</span>
    </div>
  )
}
