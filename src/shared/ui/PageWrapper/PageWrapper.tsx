import cls from './Container.module.scss'
import { FC, PropsWithChildren } from 'react'
import { cn } from '../../lib/cn/cn'

interface Props {
  className?: string
  id?: string
}

export const PageWrapper: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  id
}) => {
  return (
    <section id={id} className={cn(cls.Container, {}, [String(className)])}>
      {children}
    </section>
  )
}
