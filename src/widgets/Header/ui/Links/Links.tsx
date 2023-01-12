import cls from './Links.module.scss'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { ReactComponent as PortfolioIcon } from 'shared/assets/icons/portfolioIcon.svg'

export const Links = () => {
  return (
    <div className={cls.Links}>
      <a href='tel:+79814412617' className={cls.phone}>
        <PhoneIcon />
      </a>
      <a href='mailto:wan6sta@gmail.com' className={cls.gmail}>
        <EnvelopeIcon />
      </a>
      <a
        href='https://drive.google.com/file/d/1MLbB7KNFlR84kjmIUj8LSAgZe0TEpN5l/view?usp=sharing'
        target='_blank'
        className={cls.cv}
      >
        <PortfolioIcon />
      </a>
    </div>
  )
}
