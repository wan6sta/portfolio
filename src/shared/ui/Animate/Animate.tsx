import { FC, PropsWithChildren } from 'react'
import { Bounce } from 'react-awesome-reveal'

export const Animate: FC<PropsWithChildren> = ({ children }) => {
  return <Bounce>{children}</Bounce>
}
