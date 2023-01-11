import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<PropsWithChildren<ButtonProps>> = props => {
  const { children, ...restProps } = props

  return (
    <button className={cls.Button} {...restProps}>
      {children}
    </button>
  )
}
