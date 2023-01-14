import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import { cn } from '../../lib/cn/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<PropsWithChildren<ButtonProps>> = props => {
  const { disabled, children, ...restProps } = props

  return (
    <button
      className={cn(cls.Button, { [cls.disabled]: Boolean(disabled) })}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  )
}
