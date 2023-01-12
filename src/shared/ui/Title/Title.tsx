import cls from './Title.module.scss'
import { FC, PropsWithChildren } from 'react'
import { cn } from '../../lib/cn/cn'

interface Props {
  bgTitle: string
  className?: string
}

export const Title: FC<PropsWithChildren<Props>> = ({
  bgTitle,
  children,
  className
}) => {
  return (
    <div className={cn(cls.Title, {}, [String(className)])}>
      <h2>{children}</h2>
      <span className={cls.bgTitle}>{bgTitle.toUpperCase()}</span>
    </div>
  )
}
