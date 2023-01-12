import cls from './MenuBtn.module.scss'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { Portal } from 'shared/ui/Portal/Portal'
import { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const MenuBtn: FC<ButtonProps> = props => {
  const { ...restProps } = props

  return (
    <Portal element={document.getElementById('root')}>
      <button className={cls.MenuBtn} {...restProps}>
        <Bars3Icon />
      </button>
    </Portal>
  )
}
