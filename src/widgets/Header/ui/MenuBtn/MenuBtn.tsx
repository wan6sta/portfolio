import cls from './MenuBtn.module.scss'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { Portal } from 'shared/ui/Portal/Portal'
import { ButtonHTMLAttributes, FC, forwardRef, Ref } from 'react'

export type RefBtn = HTMLButtonElement

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref: Ref<HTMLButtonElement>
}

export const MenuBtn: FC<ButtonProps> = forwardRef<RefBtn, ButtonProps>(
  (props, refBtn) => {
    const { ...restProps } = props

    return (
      <Portal element={document.getElementById('root')}>
        <button className={cls.MenuBtn} {...restProps} ref={refBtn}>
          <Bars3Icon />
        </button>
      </Portal>
    )
  }
)
