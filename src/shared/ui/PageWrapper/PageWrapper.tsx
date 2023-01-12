import cls from './Container.module.scss'
import { FC, PropsWithChildren } from 'react'
import { cn } from '../../lib/cn/cn'

interface Props {
  className?: string
}

export const PageWrapper: FC<PropsWithChildren<Props>> = ({
  children,
  className
}) => {
  return (
    <section className={cn(cls.Container, {}, [String(className)])}>
      {children}
    </section>
  )
}
