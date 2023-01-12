import cls from './Links.module.scss'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/20/solid'
import { ReactComponent as PortfolioIcon } from 'shared/assets/icons/portfolioIcon.svg'
import { ReactComponent as CodewarsIcon } from 'shared/assets/icons/codewars.svg'
import { ReactComponent as Tg } from 'shared/assets/icons/telegram.svg'
import { ReactComponent as Git } from 'shared/assets/icons/github.svg'
import { Bounce } from 'react-awesome-reveal'

export const Links = () => {
  return (
    <Bounce triggerOnce>
      <div className={cls.Links}>
        <div className={cls.linksWrapper}>
          <a href='tel:+79814412617'>
            <PhoneIcon />
            <span>+79814412617</span>
          </a>
          <a href='mailto:wan6sta@gmail.com'>
            <EnvelopeIcon />
            <span>wan6sta@gmail.com</span>
          </a>
          <a
            href='https://drive.google.com/file/d/1MLbB7KNFlR84kjmIUj8LSAgZe0TEpN5l/view?usp=sharing'
            target='_blank'
            className={cls.cv}
          >
            <PortfolioIcon />
            <span>CV</span>
          </a>
        </div>
        <div className={cls.socialWrapper}>
          <span>My Social Media</span>
          <div className={cls.socials}>
            <a target='_blank' href='https://github.com/wan6sta'>
              <Git />
            </a>
            <a target='_blank' href='https://www.t.me/wan6sta'>
              <Tg />
            </a>
            <a target='_blank' href='https://www.codewars.com/users/wan6sta'>
              <CodewarsIcon />
            </a>
          </div>
        </div>
      </div>
    </Bounce>
  )
}
