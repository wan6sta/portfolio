import cls from './Container.module.scss'
import { FC, PropsWithChildren } from 'react'

export const PageContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className={cls.Container}>{children}</div>
}
